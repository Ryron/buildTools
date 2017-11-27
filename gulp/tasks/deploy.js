var gulp = require('gulp');
var requireDir = require('require-dir');
var config = require('../config');
requireDir('./deploy', {
	recurse: true
});
gulp.task('deploy', ['cssmin', 'imagesmin', 'htmlmin', 'javascriptmin'], function() {});