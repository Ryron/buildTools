var gulp = require('gulp');
var scss = require('gulp-sass');
var config = require('../../config');
var concat = require('gulp-concat');
gulp.task('css', function() {
	return gulp.src(config.css.src)
		.pipe(scss(config.css.settings))
		.pipe(concat('index.css'))
		.pipe(gulp.dest(config.css.dest))
});