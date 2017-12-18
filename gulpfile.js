let gulp = require('gulp');
let requireDir = require('require-dir');
let Server = require('karma').Server;
requireDir('./gulp/tasks');
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});