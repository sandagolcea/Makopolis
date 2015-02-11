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
       // Override defaults here
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
   }
 });
 


 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.registerTask('default', ['jshint']);
 grunt.registerTask('hint', ['jshint']);
};