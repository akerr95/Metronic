/**
 * Created by akerr on 8/8/16.
 */
'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var less = require('gulp-less')
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require("babelify");
var tap = require('gulp-tap');
var watch = require('gulp-watch');
var assign = require('lodash.assign');

// add custom browserify options here
var customOpts = {
    entries: ['./public/Components/main.js'],
    debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));


// add transformations here
// i.e. b.transform(coffeeify);
b.transform(babelify, {presets: ["es2015", "react"],plugins: ["transform-object-rest-spread"]});
b.plugin(require('css-modulesify'), {
    rootDir: __dirname,
    output: './public/stylesheets/Mystyle.css'
});

gulp.task('js', Bundle) ;// so you can run `gulp js` to build the file
gulp.task('less', mBundle);
gulp.task('watch',watcher);
gulp.task('default', gulp.series('less','js'));
b.on('update', Bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal


function watcher(){
    gulp.watch('./public/Components/Styles/*.less',mBundle);
}
function mBundle(){
    return gulp.src('./public/Components/Styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/Components/Styles'))
}

function Bundle() {
    return b.bundle()
    // log errors if they happen
       .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('UI.js'))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        // optional, remove if you dont want sourcemaps
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./public/javascripts'));
}