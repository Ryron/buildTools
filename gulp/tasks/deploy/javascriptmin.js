var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config = require('../../config');
var rev = require('gulp-rev');
gulp.task('javascriptmin', function() {
	return gulp.src(config.javascript.src)
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest(config.javascript.dest)) //输出目录
        .pipe(rev.manifest("rev-manifest-js.json"))
        .pipe(gulp.dest('./rev'))
});