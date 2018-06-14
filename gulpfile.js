'use strict';

const gulp = require('gulp');
const spawn = require('child_process').spawn;
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

function configure(cb) {
  const emscriptenPath = process.env.EMSCRIPTEN;

  if (!fs.existsSync(path.resolve(emscriptenPath))) {
    return cb('EMSCRIPTEN env var is invalid');
  }

  const s = spawn(
    path.join(emscriptenPath, 'emconfigure'), ['cmake', path.resolve('.')], { cwd: path.resolve('./', 'build.project') }
  );

  s.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  s.stderr.on('data', (data) => {
    console.log(`error: ${data}`);
  });

  s.on('close', () => cb());
}

function make(cb) {
  const emscriptenPath = process.env.EMSCRIPTEN;

  if (!fs.existsSync(path.resolve(emscriptenPath))) {
    return cb('EMSCRIPTEN env var is invalid');
  }

  const s = spawn(
    path.join(emscriptenPath, 'emmake'), ['make'], { cwd: path.resolve('.', 'build.project') }
  );

  s.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  s.stderr.on('data', (data) => {
    console.log(`error: ${data}`);
  });

  s.on('close', () => cb());
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
    '--llvm-lto', '3',
    '--memory-init-file', '0',
    '-s', 'ALLOW_MEMORY_GROWTH=1',
    '-s', 'NO_FILESYSTEM=1',
    '-s', 'WASM=0',
    '-o', out,
    'anitomyscript.bc'
  ]

  const s = spawn(path.join(emscriptenPath, 'emcc'), spawnArgs, { cwd: dir });

  s.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  s.stderr.on('data', (data) => {
    console.log(`error: ${data}`);
  });

  s.on('close', () => cb());
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

gulp.task('configure', configure);
gulp.task('make', make);
gulp.task('clear-js', clearJS);
gulp.task('clear-build', clearBuild);
gulp.task('generate', gulp.series(clearJS, generate));
gulp.task('build', gulp.series(configure, make));
gulp.task('default', gulp.series(configure, make, generate));
