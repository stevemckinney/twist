const gulp = require('gulp');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const order = require('gulp-order');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const importer = require('node-sass-globbing');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const glob = require('glob');
const gulpicon = require('gulpicon/tasks/gulpicon');

const src = {
  scss: 'assets/sass/**/*.scss',
  css: 'dist/css',
  html: 'styleguide/**/*',
  js: 'assets/js/**/*.js',
  images: 'assets/images/**/*'
};

// Use glob to get file paths
const svg = glob.sync('assets/images/*.svg');

// browser-sync watched files
// automatically reloads the page when files changed
const browserSyncWatchFiles = [
  src.css,
  src.js,
  src.html
];

// browser-sync options
// see: https://www.browsersync.io/docs/options/
const browserSyncOptions = {
  proxy: 'twist.dev',
  injectChanges: true,
  open: false
};


// CSS
const sass_config = {
  importer,
  includePaths: [
    './node_modules/breakpoint-sass/stylesheets/'
  ]
};

gulp.task('sass', () => {
  gulp.src(src.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass(sass_config).on('error', sass.logError))
    .pipe(gulp.dest(src.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('cssnano', () => {
  return gulp.src(src.css)
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(src.css));
});

gulp.task('autoprefixer', () => {
  gulp.src(src.css + '/global.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }));
});

// Images
gulp.task('images', () => {
  return gulp.src(src.images)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('svg', () => {
  return gulp.src(svg)
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// SVG — gulpicon
// Set up the config object
config = {};

// Change the location
config.dest = 'dist/images';

// Enable inlining of SVG
config.enhanceSVG = true;

// Setup the 'gulpicon' task
gulp.task('gulpicon', gulpicon(svg, config));

// Watch files
gulp.task('watch', () =>  {
  gulp.watch(src.css, ['autoprefixer']);
});

gulp.task('browser-sync', () => {
  browserSync.init(browserSyncWatchFiles, browserSyncOptions);
});

// Serve, Sass and live reloading
gulp.task('serve', ['browser-sync', 'watch'], () => {
  gulp.watch(src.scss, ['sass']).on('change', reload);
  gulp.watch('dist/js/**/*').on('change', reload);
  gulp.watch(src.html).on('change', reload);
});

gulp.task('default', ['serve']);
gulp.task('build', [
  'images',
  'sass',
  'autoprefixer',
  'cssnano'
]);