var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    config = require('../config').less;
gulp.task('lessmin', function(){
    return gulp.src(config.src)         //less源文件
        .pipe(less(config.settings))    //执行编译
        .pipe(cssmin())
        //.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dest))   //输出目录
});
