/// <binding BeforeBuild='sass' Clean='sass' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    sass = require("gulp-sass"),
    concat = require("gulp-concat"),
    sourcemaps = require("gulp-sourcemaps"),
    fontAwesome = require("node-font-awesome");

var paths = {
    webroot: "./src/"
};

//paths.js = paths.webroot + "js/**/*.js";
//paths.minJs = paths.webroot + "js/**/*.min.js";
paths.cssDir = paths.webroot + "css/";
paths.cssFiles = paths.cssDir + "**/*.css";
paths.scss = paths.cssDir + "**/*.scss";
//paths.minCss = paths.webroot + "css/**/*.min.css";

paths.concatCssDest = paths.webroot + "css/Test.css";
var finalCSSFile = "Test.css";

paths.fontsDir = paths.webroot + "fonts/";
//paths.concatJsDest = paths.webroot + "js/site.min.js";
//paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("setup", 
          [
            "fonts", 
            "sass"
          ]);

gulp.task('fonts', function() {
  gulp.src(fontAwesome.fonts)
    .pipe(gulp.dest(paths.fontsDir));
});

gulp.task("sass", function () {
    // return gulp.src(paths.scss)
    //   .pipe(sass({
    //       includePaths: [fontAwesome.scssPath]
    //   }))
    //   //.pipe(sourcemaps.write('./'))
    //   .pipe(gulp.dest(paths.webroot + 'css'));

    return gulp.src([
            paths.scss, fontAwesome.scssPath + "/**/*.scss" 
        ])
      .pipe(sass()) 
      .pipe(concat(paths.concatCssDest))
      .pipe(gulp.dest('.'));       
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


