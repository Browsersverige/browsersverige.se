module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['js/scripts.js', 'js/b.min.js'],

    concat: {
      dist: {
        src: [
        'js/jquery.min.js',
        'js/countup.js',
        'js/handlebars.js',
        'js/spin.js',
        'js/globalize.js',
        'js/dx.chartjs.js',
        'js/browsersverige.js',
        ],
        dest: 'js/scripts.js'
      }
    },

    uglify: {
      dev: {
        options: {
          compress: false,
          beautify: true,
          mangle: false
        },
        files: {
          'js/min/b.js': ['js/scripts.js']
        }
      },
      prod: {
        options: {
          compress: true,
          mangle: false
        },
        files: {
          'js/min/b.js': ['js/scripts.js']
        }
      }
    },

    sass: {
        dev: {
            options: {
                style: 'expanded'
            },
                files: {
            'css/b.css': 'scss/browsersverige.scss',
            }
        },
        prod: {
            options: {
             style: 'compressed'
            },
        files: {
            'css/b.css': 'scss/browsersverige.scss',
            }
        }
    },

    cacheBust: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 32,
      },
      assets: {
          files: [{
              src: ['index.php']
          }]
      }
    },

    watch: {
        files: ['js/*', 'scss/*'],
        tasks: ['sass:prod', 'clean', 'concat', 'uglify:dev'],
    },

    shell : {
        deploy : {
            command : 'rsync -avz --delete --progress --exclude node_modules/ * root@31.192.231.90:../../var/www/browsersverige.se',
            options: {
                stdout: true
            }
        }
    }

});

  // Load multiple grunt tasks using globbing patterns https://github.com/sindresorhus/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  //Default task(s).
  grunt.registerTask('default', ['sass:prod', 'clean', 'concat', 'uglify:prod', 'cacheBust']);
  grunt.registerTask('deploy', ['cacheBust', 'shell:deploy']);

};