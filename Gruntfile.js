/*global module:false*/

module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		path: {
				assets: 'assets/',
				src: 'src',
				dist: 'dist',
				sass: '<%= path.assets %>/sass',
				js: '<%= path.assets %>/js',
				images: '<%= path.assets %>/images',
				fonts: '<%= path.assets %>/fonts',
		},

		watch: {
			sass: {
				files: ['<%= path.sass %>/*.scss', '<%= path.sass %>/**/*.scss'],
				tasks: ['compass:dev']
			},
			grunticon: {
				files: ['**/*.{svg}', '<%= path.dist %>'],
				tasks: ['grunticon']
			},
			js: {
				files: ['<%= path.js %>/**/*.js'],
				tasks: 'concat'
			},
			images: {
				files: ['**/*.{png,jpg,gif}', '<%= path.dist %>'],
				tasks: 'imagemin'
			}
		},

		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= path.sass %>',
					dest: '<%= path.dist %>/',
					src: ['master.scss'],
					ext: '.css'
				}],
				sourcemap: true,
				style: 'expanded',
				compass: true,
				require: ['compass']
			},
			live: {
				files: [{
					expand: true,
					src: ['<%= path.sass %>/*.scss'],
					dest: '<%= path.dist %>/',
					ext: '.css'
				}],
				style: 'compressed',
				compass: true,
				require: ['compass']
			}
		},

		compass: {
			dev: {
				options: {
					sassDir: '<%= path.sass %>',
					cssDir: '<%= path.dist %>/css',
					httpPath: '/',
					imagesDir: '<%= path.dist %>/images',
					javascriptsDir: '<%= path.dist %>/js',
					fontsDir: '<%= path.dist %>/fonts',
					outputStyle: 'expanded',
					relativeAssets: true,
					require: ['breakpoint', 'ceaser-easing'],
					quiet: true
				}
			},
			live: {
				options: {
					sassDir: '<%= path.sass %>',
					cssDir: '<%= path.dist %>/css',
					httpPath: '/',
					imagesDir: '<%= path.dist %>/images',
					javascriptsDir: '<%= path.dist %>/js',
					fontsDir: '<%= path.dist %>/fonts',
					outputStyle: 'compressed',
					require: ['ceaser-easing', 'susy']
				}
			}
		},

		jekyll: {
			options: {
				src : '<%= path.src %>',
				dest: '<%= path.dist %>'
			},
			dev: {
				auto: true
			},
			live: {

			}
		},

		concat: {
			dist: {
				src: ['<%= path.js %>/enquire.js',
							'<%= path.js %>/lettering.js',
							'<%= path.js %>/fittext.js',
							'<%= path.js %>/fitvids.js',
							'<%= path.js %>/prism.js',
							'<%= path.js %>/global.js'],
				dest: '<%= path.dist %>/js/<%= pkg.name %>.js'
			},
			modernizr: {
				src: '<%= path.js %>/modernizr.js',
				dest: '<%= path.dist %>/js/modernizr.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/js/<%= pkg.name %>.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		htmlmin: {
			 dist: {
				 options: {
					 removeComments: true,
					 collapseWhitespace: true
				 },
				 files: {
					 '<%= path.src %>/**/*': '<%= path.dest %>/**/*',
				 }
			 },
		},

		grunticon: {
			 icons: {
				options: {
					src: '<%= path.images %>',
					dest: '<%= path.dist %>/images'
				}
			 }
		},
		
		imagemin: {
			 images: {
				 files: [{
					 expand: true,
					 cwd: 'src/',
					 src: ['**/*.{png,jpg,gif}'],
					 dest: '<%= path.dist %>/'
				 }]
			 }
		 },
		 
		svgmin: {
			options: {
				plugins: [{
					removeViewBox: false
				}]
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= path.images %>',
					src: ['*.svg'],
					dest: '<%= path.dist %>/images',
					ext: '.svg'
				}]
			}
		},

		copy: {
			fonts: {
				files: [
					{
						expand: true,
						cwd: '<%= path.fonts %>',
						src: ['./**/*'],
						dest: '<%= path.dist %>/fonts/'
					}
				]
			}
		}

	});

	// Tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['concat', 'uglify', 'grunticon', 'compass:dev']);
	grunt.registerTask('dev', ['copy', 'watch']);

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

};