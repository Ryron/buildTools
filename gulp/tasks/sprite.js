var gulp = require('gulp'),
    merge = require('merge-stream'),
    buffer = require('vinyl-buffer'),
    imagemin = require('gulp-imagemin'),
    path = require('path'),
    spritesmith = require('gulp.spritesmith'),
    fs = require('fs');


    var dir = 'src/images/sprite';
gulp.task('sprite', function () {
  fs.readdirSync(dir).forEach((name) => {
      var spriteData = gulp.src(dir + '/' + name + '/*.png').pipe(spritesmith({
        imgName: name + '_icon.png',
        cssName: name + '_icon.css',
        imgPath: '../' + name +'.png',
        padding: 5,
      }));
      // Pipe image stream through image optimizer and onto disk
      var imgStream = spriteData.img
      // DEV: We must buffer our stream into a Buffer for `imagemin`
      .pipe(buffer())
      // .pipe(imagemin())
      .pipe(gulp.dest('src/images/'));

    // Pipe CSS stream through CSS optimizer and onto disk
    var cssStream = spriteData.css
      //.pipe(csso())
      .pipe(gulp.dest('src/css/'));

    // Return a merged stream to handle both `end` events
    return merge(imgStream, cssStream);
  });
  // Generate our spritesheet
  // var spriteData = gulp.src('src/images/test1/*.png').pipe(spritesmith({
  //   imgName: 'sprite.png',
  //   cssName: 'sprite.css',
  //   padding: 5,
  // }));

  
});
