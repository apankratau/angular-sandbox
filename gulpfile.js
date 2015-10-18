// Include gulp
var gulp = require('gulp');

 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

 // Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src(['src/js/*.js', 'src/bower_components/angular/angular.js', 'src/bower_components/less/dist/less.js'])
      .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('src/build/js'));
});

gulp.task('styles', function() {
  return gulp.src(['src/less/styles.less', 'src/bower_components/bootstrap-less/less/variables.less', 'src/bower_components/bootstrap-less/less/mixins/*.less', 'src/bower_components/bootstrap-less/less/*.less'])
    .pipe(less())
    .pipe(prefix({ cascade: true }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('src/build/css'));
});

gulp.task('watch', function() {
  //  // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);
  //  // Watch .less files
  gulp.watch('src/less/*.less', ['styles']);
 });

 // Default Task
gulp.task('default', ['scripts', 'styles']);

gulp.task('dev', ['scripts', 'styles', 'watch']);