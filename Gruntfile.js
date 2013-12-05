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
			jekyll: {
				files: ['<%= path.src %>', '<%= path.dist %>'],
				tasks: ['jekyll:dev']
			},
			grunticon: {
				files: ['<%= path.images %>/', '<%= path.dist %>/images'],
				tasks: ['grunticon']
			},
			js: {
				files: ['<%= path.js %>/**/*.js'],
				tasks: 'concat'
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
				require: ['compass', 'ceaser-easing']
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
				require: ['compass', 'compass-yiq-color-contrast', 'ceaser-easing']
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
					require: ['ceaser-easing', 'susy'],
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
				src : '<%= path.src %>/',
				dest: '<%= path.dist %>/'
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

		copy: {
			modernizr: {
				files: [
					{
						expand: true,
						cwd: '<%= path.js %>',
						src: ['modernizr.js'],
						dest: '<%= path.dist %>/js/'
					}
				]
			},
			images: {
				files: [
					{
						expand: true,
						cwd: '<%= path.images %>',
						src: ['./**/*'],
						dest: '<%= path.dist %>/images/'
					}
				]
			},
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
	grunt.registerTask('default', ['concat', 'copy', 'watch']);
	grunt.registerTask('build', ['concat', 'uglify', 'grunticon', 'jekyll:live', 'compass:dev']);
	grunt.registerTask('dev', ['copy', 'watch']);

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

};