'use strict';

const gulp = require('gulp');
const spawn = require('child_process').spawn;
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const browserify = require('browserify');

function build(cb) {
  const emscriptenPath = process.env.EMSCRIPTEN;

  if (!fs.existsSync(path.resolve(emscriptenPath))) {
    return cb('EMSCRIPTEN env var is invalid');
  }

  const out = path.resolve('./', 'build', 'anitomy-build.js');
  const isRelease = process.env.NODE_ENV === 'prod';

  let spawnArgs = [
    '--memory-init-file', '0',
    '-std=c++14',
    '-fPIC', '-fno-exceptions', '-Wall', '-Wextra', '-Wpedantic', '-Werror',
    '--bind',
    '-v',
    '-I', path.resolve('./include'),
    '-s', 'EXPORT_NAME="anitomyscript"',
    '-s', 'WASM=0',
    '-s', 'FILESYSTEM=0',
    '-s', 'MODULARIZE=1',
    path.resolve('./include/anitomy/anitomy.cpp'),
    path.resolve('./include/anitomy/element.cpp'),
    path.resolve('./include/anitomy/keyword.cpp'),
    path.resolve('./include/anitomy/parser.cpp'),
    path.resolve('./include/anitomy/parser_helper.cpp'),
    path.resolve('./include/anitomy/parser_number.cpp'),
    path.resolve('./include/anitomy/string.cpp'),
    path.resolve('./include/anitomy/token.cpp'),
    path.resolve('./include/anitomy/tokenizer.cpp'),
    path.resolve('./src/anitomyscript.cpp'),
    '-o', out,
  ];

  if (isRelease) {
    spawnArgs = spawnArgs.concat([
      '-O3',
      '--closure', '1',
      '--llvm-lto', '3',
    ])
  }

  console.log(`Starting ${isRelease ? 'release' : 'debug'} build with emcc args`, spawnArgs);

  const emccExec = process.platform === 'win32' ? 'emcc.bat' : 'emcc';
  const s = spawn(path.join(emscriptenPath, emccExec), spawnArgs, {
    cwd: './build',
  });

  s.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  s.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  s.on('error', (e) => cb(e))
  s.on('close', (c) => cb());
}

function clearBuild(cb) {
  const buildPath = path.resolve('./build');
  fs.readdirSync(buildPath).forEach((file) => {
    const fileWithPath = path.resolve(buildPath, file);
    if (file !== '.gitignore') fse.removeSync(fileWithPath);
  });
  cb();
}

function _babel() {
  return {
    presets: ['@babel/preset-env'],
    plugins: [
      ['@babel/plugin-transform-runtime', { helpers: false }]
    ],
    only: ['index.js'],
  };
}

function browser() {
  return browserify('./index.js', { standalone: 'anitomyscript' })
    .transform('babelify', _babel())
    .bundle()
    .pipe(fs.createWriteStream('./dist/bundle.js'));
}

function browserMin() {
  return browserify('./index.js', { standalone: 'anitomyscript' })
    .transform('babelify', _babel())
    .plugin('tinyify')
    .bundle()
    .pipe(fs.createWriteStream('./dist/bundle.min.js'));
}

gulp.task('build', build);
gulp.task('browser', gulp.parallel(browser, browserMin));
gulp.task('default', gulp.series(clearBuild, 'build', 'browser'));