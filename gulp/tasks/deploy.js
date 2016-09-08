var gulp = require('gulp');

gulp.task('deploy', ['lessmin','imagesmin','htmlmin','javascriptmin']);
