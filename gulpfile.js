var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');

gulp.task('webserver', function() {
    connect.server({
        port: 3000,
        root: 'target',
        livereload: true,
        debug: true
    });
});

gulp.task('html', function() {
    gulp.src('src/html/*.html')
        .pipe(gulp.dest('target'))
        .pipe(connect.reload());
});

gulp.task('javascript', function() {
    gulp.src('src/js/main.js')
        .pipe(sourcemaps.init())
            .pipe(webpack({
                module: {
                    loaders: [
                        { test: /\.js$/, loader: 'babel'}
                    ]
                },
                output: {
                    filename: '[name].js'
                }
            }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('target/js'))
        .pipe(connect.reload());
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
    gulp.watch(['./src/html/*.html'], ['html']);
    gulp.watch(['./src/js/*.js'], ['javascript']);
});        

gulp.task('build', ['sass', 'html', 'javascript']);
gulp.task('run', ['build', 'webserver', 'watch']);
