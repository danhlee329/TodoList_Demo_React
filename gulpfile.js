﻿/// <binding BeforeBuild='sass' Clean='sass' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    sass = require("gulp-sass");//,
    //project = require("./project.json");

var paths = {
    webroot: "./src/"
};

//paths.js = paths.webroot + "js/**/*.js";
//paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.scss = paths.webroot + "css/**/*.scss";
paths.minCss = paths.webroot + "css/**/*.min.css";
//paths.concatJsDest = paths.webroot + "js/site.min.js";
//paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("sass", function () {
    return gulp.src(paths.scss)
      .pipe(sass())
      .pipe(gulp.dest(paths.webroot + 'css'));
});

//gulp.task("clean:js", function (cb) {
//    rimraf(paths.concatJsDest, cb);
//});
//
//gulp.task("clean:css", function (cb) {
//    rimraf(paths.concatCssDest, cb);
//});
//
//gulp.task("clean", ["clean:js", "clean:css"]);

//gulp.task("min:js", function () {
//    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
//        .pipe(concat(paths.concatJsDest))
//        .pipe(uglify())
//        .pipe(gulp.dest("."));
//});
//
//gulp.task("min:css", function () {
//    return gulp.src([paths.css, "!" + paths.minCss])
//        .pipe(concat(paths.concatCssDest))
//        .pipe(cssmin())
//        .pipe(gulp.dest("."));
//});

//gulp.task("min", ["min:js", "min:css"]);

