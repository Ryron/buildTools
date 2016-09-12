var gulp = require('gulp'),
    config = require('../config'),
    fileVersion = require('gulp-fileversion');
gulp.task('html', function(){
    return gulp.src(config.html.src)
        .pipe(fileVersion({ 'verName': 'ver' }))
        .pipe(gulp.dest(config.html.dest))   //输出目录
});
