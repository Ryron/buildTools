var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
// var fileVersion = require('gulp-fileversion');
var revCollector = require('gulp-rev-collector');
var config = require('../../config');
gulp.task('htmlmin', function() {
	return gulp.src(['./rev/**/*.json', config.html.src])
		.pipe(revCollector({
	        replaceReved: true
	    }))
		// .pipe(fileVersion({
		// 	'verName': 'ver'
		// }))
		.pipe(htmlmin(config.html.settings))
		.pipe(gulp.dest(config.html.dest)) //输出目录
});