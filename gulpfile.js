"use strict";

var browserify = require('browserify');
//var watchify = require('watchify');
var watchify = require('gulp-watchify');
var babelify = require('babelify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

var paths = (function () {
    var root = __dirname;
    return {
        src: root + '/src/app.js',
        dest: root + '/dest'
    };
})();

gulp.task('b', function () {
    return browserify(paths.src, { debug: true })
        .transform(babelify)
        .bundle()
        .pipe(source("app.js"))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('wb', watchify(function(watchify) {
    return browserify(paths.src, { debug: true })
        .transform(babelify, {presets: ['es2015']})
        .bundle()
        .pipe(source("app.js"))
        .pipe(watchify({watch: false}))
        .pipe(gulp.dest(paths.dest));
}));

gulp.task('default', function () {
    console.log(paths);
});
