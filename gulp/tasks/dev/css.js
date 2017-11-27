var gulp = require('gulp');
var scss = require('gulp-sass');
var config = require('../../config');
gulp.task('css', function() {
	return gulp.src(config.css.src)
		.pipe(scss(config.css.settings))
		.pipe(gulp.dest(config.css.dest))
});