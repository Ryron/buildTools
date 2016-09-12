var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    requireDir = require('require-dir');
    
    requireDir('./default', { recurse: true});
gulp.task('default', ['less','javascript','html','images','watch'],function(){
  browserSync({
    server: {
      baseDir: "./"   // 设定项目根目录启动服务
    }
  });
});
