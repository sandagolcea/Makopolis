module.exports = function(grunt) {

 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   mocha_casperjs: {
     options: {
     },
     files: {
       src: ['test/**/*']
     }
   },
   express: {
     options: {
       script: './server.js',
       port: '5000'
     },
     dev: {
       options: {
         script: './server.js'
       }
     },
     prod: {
       options: {
         script: './server.js',
         node_env: 'production'
       }
     },
     test: {
       options: {
         script: './server.js'
       }
     }
   },
   jasmine_node: {
     all: ['spec/']
   },
   jshint: {
     all: ['Gruntfile.js', 'spec/**/*.js', 'js/**/*.js']
   },
   watch: {
     all: ['<%= jshint.files %>'],
     tasks: ['jshint']
   },
   jasmine: {
    coverage : {
    output : 'junit/coverage/',
    reportType : 'cobertura',
    excludes : ['lib/**/*.js']    
      }
    }
 });



 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-jasmine-node');
 grunt.loadNpmTasks('grunt-mocha-casperjs');
 grunt.loadNpmTasks('grunt-express-server');
 grunt.loadNpmTasks('grunt-jasmine-coverage');

 grunt.registerTask('default', ['jshint', 'express', 'mocha_casperjs']);
 grunt.registerTask('hint', ['jshint']);
};