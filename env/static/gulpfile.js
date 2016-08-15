var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('minify-css', function() {
  return gulp.src('/home/wade/Documents/work/sensorseverywhere/se/env/static/static/css/*.css')
  .pipe(minifyCss())
  .pipe(gulp.dest('/home/wade/Documents/work/sensorseverywhere/se/env/static/build/css/'))
});


gulp.task('uglify', function() {
  return gulp.src(['/home/wade/Documents/work/sensorseverywhere/se/env/static/static/js/*.js',
                  '!/home/wade/Documents/work/sensorseverywhere/se/env/static/static/js/*.min.js'])
  .pipe(uglify())
  .pipe(gulp.dest('/home/wade/Documents/work/sensorseverywhere/se/env/static/build/js/'))
});

gulp.task('minify', ['minify-css', 'uglify'])
