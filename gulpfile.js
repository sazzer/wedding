var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('webserver', function() {
    connect.server({
        port: 3000,
        root: 'target',
        livereload: true,
        debug: true
    });
});

gulp.task('sass', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('target/styles'))
        .pipe(connect.reload());
});


gulp.task('watch', function() {
    gulp.watch(['./src/scss/*.scss'], ['sass']);
});        

gulp.task('run', ['sass', 'webserver', 'watch']);
