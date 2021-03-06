var gulp         = require('gulp'),
    path         = require('path'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    postcss      = require('gulp-postcss'),
    cssnext      = require('postcss-cssnext'),
    assets       = require('postcss-assets'),
    colorguard   = require('gulp-colorguard'),
    cssnano      = require('gulp-cssnano'),

;

// Define PostCSS tasks
var cssnext       = cssnext(config.tasks.css.postcss.cssnext),
    assets        = assets(config.tasks.css.postcss.assets),
    colorguard    = colorguard(config.tasks.css.postcss.colorguard),
    cssnano       = cssnano(config.tasks.css.postcss.cssnano),
    postcssConfig = [
      cssnext,
      assets,
      colorguard,
      //  TODO - Only run cssnano in Prod, not Dev
      cssnano
    ]
;

// CSS
var processCSS = function() {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss(postcssConfig))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
  ;
};

gulp.task('css', processCSS);

module.exports = processCSS;
