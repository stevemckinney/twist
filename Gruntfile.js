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
			},
			styleguide: {
				files: ['src/**/*.{php,js,png,html,css}', '<%= path.dist %>'],
				tasks: 'copy:styleguide'
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
					quiet: true,
					sourcemap: true
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
		
		svgstore: {
			options: {
				prefix : 'shape-',
			},
			files: {
				'<%= path.dist %>/images/sprite.svg': ['<%= path.images %>/*.svg']
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
			},
			styleguide: {
				files: [{
					expand: true,
					cwd: '<%= path.src %>/',
					src: ['./**/*'],
					dest: '<%= path.dist %>/'
				}]
			}
		}

	});

	// Tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['concat', 'uglify', 'grunticon', 'compass:dev']);
	grunt.registerTask('dev', ['copy', 'watch']);

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

};