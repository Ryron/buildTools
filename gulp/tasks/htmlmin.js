var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin');
    config = require('../config');
gulp.task('htmlmin', function(){
    return gulp.src(config.html.src)
               .pipe(htmlmin(config.html.settings))
               .pipe(gulp.dest(config.html.dest))   //输出目录
});
