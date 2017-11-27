var gulp = require('gulp');
var scss = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var config = require('../../config');
var rev = require('gulp-rev');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer'); // 自动添加css前缀
var AUTOPREFIXER_BROWSERS = [
    'last 6 version',
    'ie >= 6',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.0',
    'bb >= 10'
];

gulp.task('cssmin', function() {
    return gulp.src(config.css.src) //less源文件
        .pipe(scss(config.css.settings)) //执行编译
        .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(cssmin())
        .pipe(concat('index.css'))
        .pipe(rev())
        .pipe(gulp.dest(config.css.dest)) //输出目录
        .pipe(rev.manifest("rev-manifest-css.json"))
        .pipe(gulp.dest('./rev'))
});