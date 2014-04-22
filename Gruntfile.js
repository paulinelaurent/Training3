module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ["assets/less"]
        },
        files: {
          "css/style.css": "css/less/styles.less",
//          "../../../public/assets/css/print.css": "assets/less/print.less",
//          "../../../public/assets/css/ie8.css": "assets/less/ie8.less"
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: [
        'css/less/*.less',
        'css/less/*/*.less',
        'css/less/*/*/*.less'
        ],
        tasks: ['less'],
      },
    },
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};