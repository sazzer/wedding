var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var webpack = require('gulp-webpack');
var notify = require('gulp-notify');
var imageResize = require('gulp-image-resize');
var debug = require('gulp-debug');
var newer = require('gulp-newer');

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
        .pipe(connect.reload())
        .pipe(notify("Built Static Files"));
});

gulp.task('javascript', function() {
    gulp.src('src/js/main.js')
        .pipe(sourcemaps.init())
            .pipe(webpack({
                module: {
                    loaders: [
                        {
                            test: /\.jsx?$/,
                            exclude: /(node_modules)/,
                            loader: 'babel',
                            query: {
                                optional: ['runtime'],
                                stage: 0
                            }
                        },
                        {
                            test: /\.json$/,
                            loader: 'json'
                        }
                    ]
                },
                output: {
                    filename: '[name].js'
                }
            }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('target/js'))
        .pipe(connect.reload())
        .pipe(notify("Built Javascript"));
});
gulp.task('sass', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('target/styles'))
        .pipe(connect.reload())
        .pipe(notify("Built Stylesheets"));
});

gulp.task('thumbnails', function() {
    var target = 'target/images/thumbnails';
    gulp.src('src/images/*.jpg')
        .pipe(newer(target))
        .pipe(debug({
            title: 'Thumbnail'
        }))
        .pipe(imageResize({
            width: 100,
            height: 100
        }))
        .pipe(gulp.dest(target));
});

gulp.task('display', function() {
    var target = 'target/images/display';
    gulp.src('src/images/*.jpg')
        .pipe(newer(target))
        .pipe(debug({
            title: 'Display'
        }))
        .pipe(imageResize({
            width: 800,
            height: 600
        }))
        .pipe(gulp.dest(target));
});

gulp.task('images', ['thumbnails', 'display']);

gulp.task('watch', function() {
    gulp.watch(['src/scss/**/*.scss'], ['sass']);
    gulp.watch(['src/html/**/*.html'], ['html']);
    gulp.watch(['src/js/**/*.js'], ['javascript']);
});

gulp.task('build', ['sass', 'html', 'javascript']);
gulp.task('run', ['build', 'webserver', 'watch']);
