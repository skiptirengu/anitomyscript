'use strict';

const gulp = require('gulp');
const spawn = require('child_process').spawn;
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const browserify = require('browserify');
const babelify = require('babelify');

function configure(cb) {
  const emscriptenPath = process.env.EMSCRIPTEN;

  if (!fs.existsSync(path.resolve(emscriptenPath))) {
    return cb('EMSCRIPTEN env var is invalid');
  }

  const s = spawn(
    path.join(emscriptenPath, 'emconfigure'), ['cmake', path.resolve('.')], {
      cwd: path.resolve('./', 'build.project')
    }
  );

  s.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  s.stderr.on('data', (data) => {
    console.log(`error: ${data}`);
  });

  s.on('error', (e) => cb(e))
  s.on('close', (c) => cb());
}

function make(cb) {
  const emscriptenPath = process.env.EMSCRIPTEN;

  if (!fs.existsSync(path.resolve(emscriptenPath))) {
    return cb('EMSCRIPTEN env var is invalid');
  }

  const s = spawn(
    path.join(emscriptenPath, 'emmake'), ['make'], {
      cwd: path.resolve('.', 'build.project')
    }
  );

  s.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  s.stderr.on('data', (data) => {
    console.log(`error: ${data}`);
  });

  s.on('error', (e) => cb(e))
  s.on('close', (c) => cb());
}

function generate(cb) {
  const emscriptenPath = process.env.EMSCRIPTEN;

  if (!fs.existsSync(path.resolve(emscriptenPath))) {
    return cb('EMSCRIPTEN env var is invalid');
  }

  const dir = path.resolve('.', 'build.project');
  const out = path.resolve('./', 'build', 'anitomy-build.js');
  const spawnArgs = [
    '-O3',
    '--bind',
    '--closure', '1',
    '--llvm-lto', '3',
    '--memory-init-file', '0',
    '-s', 'EXPORT_NAME="anitomyscript"',
    '-s', 'NO_FILESYSTEM=1',
    '-s', 'WASM=0',
    '-s', 'MODULARIZE=1',
    '-o', out,
    'anitomyscript.bc'
  ]

  const s = spawn(path.join(emscriptenPath, 'emcc'), spawnArgs, {
    cwd: dir
  });

  s.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  s.stderr.on('data', (data) => {
    console.log(`error: ${data}`);
  });

  s.on('error', (e) => cb(e))
  s.on('close', (c) => cb());
}

function clearJS(cb) {
  const buildPath = path.resolve('./build');
  fs.readdirSync(buildPath).forEach((file) => {
    const fileWithPath = path.resolve(buildPath, file);
    if (file !== '.gitkeep') fse.removeSync(fileWithPath);
  });
  cb();
}

function clearBuild(cb) {
  const buildPath = path.resolve('./build.project');
  fs.readdirSync(buildPath).forEach((file) => {
    const fileWithPath = path.resolve(buildPath, file);
    if (file !== '.gitignore') fse.removeSync(fileWithPath);
  });
  cb();
}

function browser() {
  return browserify('./index.js', {
      standalone: 'anitomyscript'
    })
    .transform('babelify', {
      presets: ['babel-preset-env'],
      only: "index.js"
    })
    .bundle()
    .pipe(fs.createWriteStream('./dist/bundle.js'));
}

function browserMin() {
  return browserify('./index.js', {
      standalone: 'anitomyscript'
    })
    .transform('uglifyify', {
      global: true
    })
    .transform('babelify', {
      presets: ['babel-preset-env'],
      only: 'index.js'
    })
    .bundle()
    .pipe(fs.createWriteStream('./dist/bundle.min.js'));
}

gulp.task('browser', browser);
gulp.task('browser-min', browserMin);
gulp.task('build-browser', gulp.parallel(browser, browserMin));
gulp.task('configure', configure);
gulp.task('make', make);
gulp.task('clear-js', clearJS);
gulp.task('clear-build', clearBuild);
gulp.task('generate', gulp.series(clearJS, generate));
gulp.task('build', gulp.series(configure, make, generate));
gulp.task('rebuild', gulp.series(clearBuild, configure, make, clearJS, generate, gulp.parallel(browser, browserMin)));
gulp.task('default', gulp.series(configure, make, clearJS, generate, gulp.parallel(browser, browserMin)));