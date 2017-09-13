module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style/style.css' : 'style/style.scss'
				}
			}
		},
		/*

		'ftp-deploy': {
			build: {
				auth: {
				host: '160.153.162.21',
				port: 21,
				authKey: 'key1'
    		},
			src: 'images',
			dest: '/images'
  			}
		},
*/

		execute: {
		    target: {
		        src: [
				'js/directory.js',
				'js/video.js',
				'js/info.js',
				'js/properties.js',
				'js/description.js',
				'js/images.js'
		        ]
		    }
		},

		clean: {
		  contents: ['build/*']
		},

		// 'compile-handlebars': {
	  // 	allStatic: {
		//     files: [{
		//       src: 'template/template.handlebars',
		//       dest: 'build/index.html'
		//     }],
		//     preHTML: 'template/pre-dev.html',
		//     postHTML: 'template/post-dev.html',
		//     templateData: 'fileList.json'
		//   }
		// },

		'compile-handlebars': {
			allStatic: {
		    files: [{
					expand: true,
					cwd: 'template/',
		      src: '*.handlebars',
		      dest: 'build',
					ext: '.html'
		    }],
		    preHTML: 'template/page-header.html',
		    postHTML: 'template/page-footer.html',
		    templateData: 'fileList.json'
		  }
		},

		copy: {
	  	main: {
				expand: true,
		    src: 'build/index.html',
		    dest: '',
		    flatten: true,
		    filter: 'isFile',
	  	},
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}

		},
		browserSync: {
			bsFiles: {
				src: ['build/*.html', 'style/*.css']
			},
			options: {
				watchTask: true,
				port: 8000,
				server: {
					baseDir: "./"
				}
			}

		}

	});
	grunt.loadNpmTasks('grunt-ftp-deploy');
	grunt.loadNpmTasks('grunt-execute');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-compile-handlebars');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('default',['execute', 'sass', /* 'ftp-deploy', */ 'clean', 'compile-handlebars', 'copy', 'browserSync', 'watch']);
	grunt.registerTask('cleaner', ['clean']);
	grunt.registerTask('compile', ['execute', 'clean', 'compile-handlebars', 'copy']);
}
