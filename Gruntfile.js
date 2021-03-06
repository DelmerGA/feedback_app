module.exports = function(grunt) {

  var browserifyFiles = require('./build/helpers/browserify_files.js')(grunt);
  var config = grunt.file.exists('./config.json') ? grunt.file.readJSON('./config.json'):{};

  grunt.initConfig({
    browserify: {
      dist: {
          files: browserifyFiles('index.js', [
              {path: 'angular/angular.js', component: true},
              {path: 'angular-route/angular-route.js', component: true},
              {path: 'jquery/dist/jquery.js', component: true},
              {path: 'bootstrap/dist/js/bootstrap.min.js', component: true},
              {path: '**/*.js'},
              {path: '!index.js'}
            ])
      }
    },
    cssmin: {
      combine: {
        files: {
          'app/public/stylesheets/app.min.css': [
            'app/public/components/**/bootstrap.css',
            'app/public/stylesheets/**/*.css'
          ]
        }
      }
    },
    watch: {
      files: [
        'app/public/javascripts/**/*.js',
        '!app/public/javascripts/main.js',
        'app/public/stylesheets/**/*.css'
      ],
      tasks: ['default']
    },
    gen: {
      config: config,
      controller: 'controllers',
      service: 'services',
      directive: 'directives'
    }
  });

  require('load-grunt-tasks')(grunt, {
    pattern: 'grunt-*',
    scope: 'dependencies'
  });

  grunt.registerTask('clean', 'remove compiled files', function () {
    grunt.file.delete('app/public/javascripts/index.js');
    grunt.file.delete('app/public/stylesheets/app.min.css');
  });

  grunt.loadTasks('build/tasks');
  grunt.registerTask('default', 'clean and browserify', ['clean', 'browserify', 'cssmin', 'watch']);

}
