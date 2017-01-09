var gulp = require('gulp'),
gutil  = require('gulp-util'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat');

gulp.task('js', function () {
    gulp.src('./server/public/scripts/**/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js'));
});

gulp.watch('./server/public/scripts/**/*.js', function () {
     gulp.run('js');
});

gulp.task('default', ['js']);
