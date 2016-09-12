var gulp = require('gulp'),
    requireDir = require('require-dir');

    requireDir('./deploy', { recurse: true});
gulp.task('deploy', ['lessmin','imagesmin','htmlmin','javascriptmin']);
