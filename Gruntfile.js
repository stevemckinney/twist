/*global module:false*/

module.exports = function(grunt) {
	'use strict';
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: ['src/assets/js/lettering.js', 
							'src/assets/js/fittext.js',
							'src/assets/js/fitvids.js', 
							'src/assets/js/prism.js',
							'src/assets/js/global.js'],
				dest: 'site/assets/js/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'site/assets/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		jshint: {
			files: ['gruntfile.js', '<%= pkg.path.js %>*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		compass: {
			dev: {
				options: {
					sassDir: 'src/assets/sass',
					cssDir: 'site/assets/css',
					httpPath: '/',
					imagesDir: 'site/assets/images',
					javascriptsDir: 'src/assets/js',
					fontsDir: 'src/assets/fonts',
					outputStyle: 'expanded'
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
		watch: {
			jekyll: {
				files: ['src/*.html', 'site/*.html'],
				tasks: ['jekyll:dev']
			},
			sass: {
        files: ['src/assets/sass/*.scss', 'src/assets/sass/**/*.scss'],
        tasks: ['compass:dev']
      },
      grunticon: {
        files: ['src/assets/images/', 'site/assets/images/'],
        tasks: ['grunticon']
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
			prod: {
				src: '<%= pkg.path.src %>',
				dest: '<%= pkg.path.dest %>'
			}
		},
		grunticon: {
	    icons: {
	        options: {
	        	src: "src/assets/images/",
						dest: "site/assets/images/",
						svgo: true
	      }
	    }
    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-jekyll');
	
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	// Tasks
	grunt.registerTask('default', ['watch', 'htmlmin', 'grunticon', 'jekyll:dev', 'compass:dev']);
	grunt.registerTask('build', ['watch', 'htmlmin', 'grunticon', 'jekyll:dev', 'compass:dev']);

};