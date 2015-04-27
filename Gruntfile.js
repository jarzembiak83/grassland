'use strict';
module.exports = function (grunt) {

    var config = {
        dir: {
            main: 'src/main/resources/static',
            source_js: 'src/main/js',
            provided_js: 'src/main/provided_js',
            provided_css: 'src/main/provided_css',
            output: 'target/classes/static',
            output_js: 'target/classes/static/scripts',
            output_css: 'target/classes/static/styles',
            output_templates: 'target/classes/static/templates'
        }
    };

    grunt.initConfig({
        config: config,
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd hh:MM:ss") %> */\n',
                separator: '\n',
                process: function (src, filepath) {
                    return src.replace(/(^|\n)(|\t)*(\/\/# sourceURL=)(.*)($|\n)/gi, '\n// from file: $4');
                }
            },
            provided_js: {
                src: '<%= config.dir.provided_js %>/**/*.js',
                dest: '<%= config.dir.output_js %>/provided.js'
            },
            provided_css: {
                src: '<%= config.dir.provided_css %>/**/*.css',
                dest: '<%= config.dir.output_css %>/provided.css'
            },
            app_js: {
                src: '<%= config.dir.source_js %>/**/*Module.js',
                dest: '<%= config.dir.output_js %>/app.js'
            },
            controller_js: {
                src: '<%= config.dir.source_js %>/**/controller/*.js',
                dest: '<%= config.dir.output_js %>/controllers.js'
            },
            service_js: {
                src: '<%= config.dir.source_js %>/**/service/*.js',
                dest: '<%= config.dir.output_js %>/services.js'
            }
        },
        copy: {
            index_html: {
                src: '<%= config.dir.main %>/index.html',
                dest: '<%= config.dir.output %>/index.html'
            },
            templates: {
                expand: true,
                cwd: '<%= config.dir.source_js %>',
                src: '**/*.tpl.html',
                dest: '<%= config.dir.output_templates %>'
            }
        },
        bower_concat: {
            all: {
                dest: '<%= config.dir.output_js %>/_bower.js',
                cssDest: '<%= config.dir.output_css %>/_bower.css',
                exclude: [],
                dependencies: {
                  'globalize': 'jquery'
                },
                bowerOptions: {
                    relative: false
                },
                mainFiles: {
                    'globalize': 'lib/globalize.js'
                }
            }
        },
        watch: {
			concat_app: {
				files: [ 'Gruntfile.js', '<%= config.dir.main %>/**/*.{html,css,js,js6,scss}' ],
				tasks: [ 'build' ]
			},
			livereload: {
				files: [ '<%= config.dir.output %>/**/*.{html,css,js}' ],
				options: {
					livereload: true
				}
			}
		},
        connect: {
            proxies: [ {
                context:'/api',
				host: '127.0.0.1',
				port: 8080,
                ws:true,
				rewrite: {
					'^/api': '/api'
				}
			} ],
            server: {
                options: {
                    port: 9000,
                    base: '<%= config.dir.output %>',
                    livereload: true,
					middleware: function(connect, options) {
						if (!Array.isArray(options.base)) {
							options.base = [ options.base ];
						}
						var middlewares = [ require('grunt-connect-proxy/lib/utils').proxyRequest ];
						options.base.forEach(function(base) {
							middlewares.push(connect.static(base));
						});
						var directory = options.directory
								|| options.base[options.base.length - 1];
						middlewares.push(connect.directory(directory));
						return middlewares;
					}
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-concat');

    grunt.registerTask('build', ['bower_concat', 'concat', 'copy']);
    grunt.registerTask('serve', ['build', 'configureProxies:server', 'connect:server', 'watch']);

};