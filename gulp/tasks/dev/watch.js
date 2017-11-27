var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../../config');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
gulp.task('watch', function() {
    watch(config.css.all, function() { //监听所有less
        gulp.start('css'); //出现修改、立马执行less任务
        reload;
    });
    watch(config.images.all, function() { //监听所有images
        gulp.start('images');
    });
    watch(config.javascript.all, function() { //监听所有javascript
        gulp.start('javascript');
    });
    watch(config.html.all, function() { //监听所有baseConfig
        gulp.start('html');
        reload();
    });
})