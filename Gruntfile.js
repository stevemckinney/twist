/*global module:false*/

module.exports = function(grunt) {
	'use strict';
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
      sass: {
        files: ['assets/sass/*.scss', 'assets/sass/**/*.scss'],
        tasks: ['compass:dev']
      },
      jekyll: {
				files: ['src/*.html', 'site/*.html'],
				tasks: ['jekyll:dev']
			},
      grunticon: {
        files: ['src/assets/images/', 'site/assets/images/'],
        tasks: ['grunticon']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: 'concat'
      }
    },
    
    compass: {
			dev: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'dist/assets/css',
					httpPath: '/',
					imagesDir: 'dist/assets/images',
					javascriptsDir: 'dist/assets/js',
					fontsDir: 'dist/assets/fonts',
					outputStyle: 'expanded',
					relativeAssets: true,
					require: ['ceaser-easing', 'susy']
				}
			},
			live: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'dist/assets/css',
					httpPath: '/',
					imagesDir: 'dist/assets/images',
					javascriptsDir: 'dist/assets/js',
					fontsDir: 'dist/assets/fonts',
					outputStyle: 'compressed',
					relativeAssets: true,
					require: ['ceaser-easing', 'susy']
				}
			}
		},
    
    jekyll: {
			server : {
				src : '<%= pkg.path.src %>',
				dest: '<%= pkg.path.dest %>',
				auto : true
			},
			dev: {
				src: '<%= pkg.path.src %>',
				dest: '<%= pkg.path.dest %>'
			},
			live: {
				src: '<%= pkg.path.src %>',
				dest: '<%= pkg.path.dest %>'
			}
		},
		
		concat: {
			dist: {
				src: ['assets/js/enquire.js',
							'assets/js/lettering.js', 
							'assets/js/fittext.js',
							'assets/js/fitvids.js', 
							'assets/js/prism.js',
							'assets/js/global.js'],
				dest: 'dist/assets/js/<%= pkg.name %>.js'
			}
		},
		
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/assets/js/<%= pkg.name %>.js': ['<%= concat.dist.dest %>']
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
	        '<%= pkg.path.src %>**/*': '<%= pkg.path.templates %>**/*',
	      }
	    },
		},
		
		grunticon: {
	    icons: {
	        options: {
	        	src: "assets/images/",
						dest: "site/assets/images/",
						svgo: true
	      }
	    }
    }
    
	});
	
	// Tasks
	grunt.registerTask('default', ['watch', 'copy']);
	grunt.registerTask('build', ['watch', 'htmlmin', 'grunticon', 'jekyll:live', 'compass:live']);
	grunt.registerTask('dev', ['watch', 'copy']);
	
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

};