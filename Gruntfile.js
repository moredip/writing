module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    markdown: {
      all: {
        files: [{
          expand: true,
          src: ["*.md"],
          dest: 'build/',
          ext: '.html'
        }]
      },
      options: {
        postCompile: function(src, context) {
          return src + "<script src='http://localhost:35729/livereload.js'></script>\n";
        },
      }
    },
    watch: {
      options: {
        spawn: false,
      },
      markdown: {
        files: ['*.md'],
        tasks: ['markdown'],
        options: {
          atBegin: true,
          livereload: true
        }
      },
      html: {
        files: 'build/*.html',
        tasks: [],
        options: {
          livereload: true
        }
      }
    },
    clean: ['build/']
  });

  grunt.registerTask('default', ['clean','watch']);
};

