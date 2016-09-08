var gulp = require('gulp'),
    browserSync = require('browser-sync');
gulp.task('default', ['less','javascript','html','images','watch'],function(){
  browserSync({
    server: {
      baseDir: "./"   // 设定项目根目录启动服务
    }
  });
});
