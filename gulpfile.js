/**
 * Settings
 */
const settings = {
	fresh: false,
	js: true,
	css: true,
	prefix: false,
	images: true,
	svg: true,
	fonts: false,
	critical: false,
	serve: true
};

/**
 * Paths
 */
const path = {
  src: 'assets/',
  dist: 'dist/',
  css: {
    src: 'assets/sass/**/*.{scss,sass}',
    dist: 'dist/css/'
  },
  js: {
    src: 'assets/js/**/*.js',
    dist: 'dist/js/'
  },
  html: {
    src: 'system/user/templates/**/*.html'
  },
  image: {
    src: 'assets/images/*.png',
    dist: 'dist/images/'
  },
  svg: {
    src: 'assets/images/*.svg',
    dist: 'dist/images/'
  },
  fonts: {
    src: './assets/fonts/**/*.{ttf,woff,woff2,eot,svg}',
    dist: 'dist/fonts/'
  },
  node_modules: './node_modules'
}

/**
 * Gulp Packages
 */
const {gulp, src, dest, watch, series, parallel} = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const cache = require('gulp-cache');
const package = require('./package.json');

// CSS
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const critical = require('critical');

// Images
const imagemin = require('gulp-imagemin');
const svgmin = require('gulp-svgmin');

// BrowserSync
const browserSync = require('browser-sync').create();

/**
 * Delete everything and start *fresh*
 */
const fresh = (done) => {

  if (!settings.fresh) return done();

  del([path.output]);

  done();
}

/**
 * Browsersync
 * see: https://www.browsersync.io/docs/options/
 **/
const browserSyncOptions = {
  proxy: package.meta.url,
  injectChanges: true
}

// Reload
const reloader = (done) => {
  browserSync.reload();

  done();
}

// Serve
const serve = (done) => {

  if (!settings.serve) return done();

  // Watch everything in src, run default & refresh the browser
  browserSync.init([path.src, path.html.src], browserSyncOptions);

  done();
}

/**
 * CSS
 */
sass.compiler = require('node-sass');

const sass_config = {
  outputStyle: 'compressed',
  sourceComments: false,
  includePaths: [
    './node_modules/breakpoint-sass/stylesheets/'
  ]
}

const css = (done) => {

  if (!settings.css) return done();

	return src(path.css.src)
	  .pipe(sourcemaps.init())
		.pipe(sass(sass_config).on('error', sass.logError))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(cssnano())
		.pipe(sourcemaps.write('./'))
		.pipe(dest(path.css.dist))

	done();
}

const prefix = (done) => {

  if (!settings.prefix) return done();

	src(path.css.dist)
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: true,
			remove: true
		}))
		.pipe(dest(path.css.dist))

	done();
}

// Critical CSS
const criticalCSS = (done) => {

	if (!settings.critical) return done();

  critical.generate({
    base: './',
    src: package.meta.url,
    css: [`${path.css.dist}/global.css`],
    dimensions: [{
      width: 414,
      height: 738
    }, {
      width: 768,
      height: 1024
    }, {
      width: 1680,
      height: 1200
    }],
    dest: path.html.src,
    inline: false,
    minify: true,
    extract: false,
    include: [
      '.headline-b',
      '.primary .fill-s1',
      '.primary',
      '.hiding'
    ],
    ignore: [
      '@font-face',
      '.dashes'
    ]
  });

  done();
}

// Fonts
const fonts = (done) => {

  if (!settings.fonts) return done();

  src(path.fonts.src).pipe(dest(path.fonts.dist));

	done();
}

/**
 * Images
 */
// @todo: tasks do not work due to some error
const images = (done) => {

  if (!settings.images) return done();

  src(path.image.src)
    .pipe(cache(
      imagemin(
        [
          imagemin.optipng({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
            mergePaths: false
          })
        ],
        {
          verbose: true
        }
      )
    ))
    .pipe(dest(path.image.dist));

  done();
}

const svg = (done) => {

  if (!settings.svg) return done();

  src(path.svg.src)
    .pipe(cache(
      imagemin(
        [
          imagemin.svgo({
            plugins: [
              { removeViewBox: false },
              { cleanupIDs: false },
              { mergePaths: false }
            ]
          })
        ],
        {
          verbose: true
        }
      )
    ))
    .pipe(dest(path.svg.dist));

  done();
}

/**
 * Watch
 */
const watching = (done) => {
  watch(path.src, series(exports.default, reloader));

  done();
}

/**
 * Single tasks
 */
exports.css = css;
exports.criticalCSS = criticalCSS;
exports.images = images;
exports.svg = svg;
exports.serve = serve;
exports.fonts = fonts;
exports.fresh = fresh;

/**
 * Multiple tasks
 */
exports.default = series(
	parallel(
		css,
		prefix,
		fonts,
		svg,
		images
	)
);

exports.build = series(fresh, exports.default, exports.criticalCSS);

exports.watch = series(
  exports.default,
	watching,
	serve
);
