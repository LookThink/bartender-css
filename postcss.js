var gulp         = require('gulp'),
    path         = require('path'),
    postcss      = require('gulp-postcss'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    cssnext      = require('postcss-cssnext')
;

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.dest, config.tasks.css.dest)
};

// define postcss tasks
var autoprefixer  = autoprefixer(config.tasks.css.postCss.autoprefixer),
    cssnano       = cssnano(config.tasks.css.postCss.cssnano),
    postcssConfig = [
      autoprefixer,
      cssnano
    ]
;

// CSS
var processCSS = function() {
  // Actual task
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(postCss(postcssConfig))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
  ;
};

gulp.task('css', processCSS);

module.exports = processCSS;
