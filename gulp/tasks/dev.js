var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    requireDir = require('require-dir'),
    config = require('../config');
    requireDir('./dev', { recurse: true});
gulp.task('dev', ['css','javascript','html','images','watch'],function(){
  browserSync({
    server: {
      baseDir: "./dist"   // 设定项目根目录启动服务
    }
  });
});
