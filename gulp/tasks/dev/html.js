var gulp = require('gulp');
var config = require('../../config');
var revCollector = require('gulp-rev-collector');
gulp.task('html', function() {
	return gulp.src(config.html.src)
		.pipe(gulp.dest(config.html.dest))
});