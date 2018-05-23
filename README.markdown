# twist
twist aims to be a flexible Sass base to begin styling common elements. It aims to be a  nicely styled by default, but offer a way to put your own stamp on it.

## Configuration
1. Navigate into the root of the project, where the `gulpfile.js`
2. Open gulpfile.js
3. Find `browserSyncOptions` and update the domain (if you don’t have one change it to `localhost`)

## Installation with terminal
1. Open terminal
2. Navigate to where the `gulpfile.js` is found
3. npm install
4. gulp
5. Navigate to the browsersync url provided in the terminal output

### Default gulp task
The default gulp task runs the `serve` task. This task will load browsersync, which will watch both Sass and JavaScript. However, it will only compile Sass, JavaScript is handled by webpack. The reason for this is you can add additional scripts without having to reload gulp every time one is added.

## Compile JavaScript with webpack
1. Open up a new terminal window where the `webpack.config.js`
2. Enter `npm run build` in terminal
3. Edit JavaScript files in `assets/js/`

## Installing and using another JavaScript library
Using an lazysizes as an example.
1. Navigate in terminal to where the `package.json` is found
2. Enter `npm install lazysizes --save-dev` in terminal
3. Open in the text editor `assets/js/global.js`
4. At the top of the file `import 'lazysizes'`
5. Configuration may be slightly different for another library but it should tell you

## CSS
Sass is the preprocessor of choice with autoprefixer for backwards compatibility.

### The `framework` folder
The files contained in here shouldn’t be edited, these are mixins used throughout the site. If you want to override a mixin copy it to `assets/sass/site/_mixins.scss` or a new file.

### The `objects` folder
This is being phased out (in favour of helpers), but there are some useful things still contained within.

### The `helpers` folder
Helpers are tachyons style single purpose class names, with most having associated breakpoints to apply the CSS.

### The `site` folder
The site folder is where all things that if the framework to update wouldn’t need updating. Anything that needs overriding should be put in here. Common things are also added to get started.

### Framework default variables
There are lots of variables dotted about, but framework related variables can be found in `assets/sass/variables/_base.scss`. Copy the variable you want to change into `assets/sass/site/_base.scss`, removing the `!default` to override successfully.

### Helper variables
These are separate to the framework and are
