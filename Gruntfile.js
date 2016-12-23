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
          beautify: false,
          mangle: false
        },
        files: {
          'js/min/browsersverige.js': ['js/scripts.js']
        }
      },
      prod: {
        options: {
          compress: true,
          mangle: false
        },
        files: {
          'js/min/browsersverige.js': ['js/scripts.js']
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
        src: ['index.php', './om/index.php', './apps/index.php']
      }]
    }
  },

  watch: {
    files: ['js/*', 'scss/*'],
    tasks: ['sass:prod', 'clean', 'concat', 'uglify:dev'],
    options: {
      spawn: false,
    },
  },


});

  // Load multiple grunt tasks using globbing patterns https://github.com/sindresorhus/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['sass:prod', 'clean', 'concat', 'uglify:prod']);

};