var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var order = require('gulp-order');
var rename = require('gulp-rename');
var compass = require('gulp-compass');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var glob = require('glob');
var gulpicon = require('gulpicon/tasks/gulpicon');

var src = {
  scss: 'assets/sass/**/*.scss',
  css: 'dist/css',
  html: 'styleguide/**/*',
  js: 'assets/js/**/*.js',
  images: 'assets/images/**/*'
};

// browser-sync watched files
// automatically reloads the page when files changed
var browserSyncWatchFiles = [
  src.css,
  src.js,
  src.html
];

// browser-sync options
// see: https://www.browsersync.io/docs/options/
var browserSyncOptions = {
  proxy: 'twist.dev',
  injectChanges: true
};

// CSS
gulp.task('sass', function() {
  return sass(src.scss, { compass: true })
    .pipe(gulp.dest(src.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('autoprefixer', function() {
  gulp.src(src.css + '/master.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }));
});

// Images
gulp.task('images', function() {
  return gulp.src(src.images)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'));
});

// SVG — gulpicon
// Use glob to get file paths
var files = glob.sync('assets/images/*.svg');

// Set up the config object
config = {};

// Change the location
config.dest = 'dist/images';

// Enable inlining of SVG
config.enhanceSVG = true;

// Setup the 'gulpicon' task
gulp.task('gulpicon', gulpicon(files, config));
  
// JavaScript
gulp.task('js', function() {
  return gulp.src(src.js)
    .pipe(order([
      'assets/js/global.js'
    ], { base: './' }))
    .pipe(concat('gunnercooke.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({ stream: true }));
});

// JavaScript
gulp.task('js', function() {
  return gulp.src(src.js)
    .pipe(order([
      'assets/js/modernizr.js',
      'assets/js/fitvids.js',
      'assets/js/flickity.js',
      'assets/js/headroom.js',
      'assets/js/prism.js',
      'assets/js/global.js'
    ], { base: './' }))
    .pipe(concat('twist.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({ stream: true }));
});

// Watch files
gulp.task('watch', function () {
  gulp.watch('dist/css/master.css', ['autoprefixer']);
});

gulp.task('browser-sync', function() {
  browserSync.init(browserSyncWatchFiles, browserSyncOptions);
});

// Serve, Sass and live reloading
gulp.task('serve', ['browser-sync', 'watch'], function() {
  gulp.watch(src.scss, ['sass']);
  gulp.watch(src.html).on('change', reload);
});


gulp.task('default', ['serve']);
gulp.task('build', ['js', 'images', 'autoprefixer']);