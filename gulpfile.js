const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('webpack', function() {
  return gulp.src('src/input.js')
    .pipe(webpack(require('./webpack.config.js')))
    .on('error', function(err) {
      console.error('Webpack error:', err);
      this.emit('end');
    })
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['webpack']);
