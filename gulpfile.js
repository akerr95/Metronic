/**
 * Created by akerr on 8/8/16.
 */
'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require("babelify");
var tap = require('gulp-tap');
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

gulp.task('js', Bundle); // so you can run `gulp js` to build the file
b.on('update', Bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function mBundle(){
    return gulp.src('./public/Components/main.js',{read:false})
        .pipe(tap(function (file){
            gutil.log('bundling: '+file.path);
            file.contents = b.bundle();
        }))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        // optional, remove if you dont want sourcemaps
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./public/javascripts'));
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