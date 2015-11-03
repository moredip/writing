module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    copy: {
      'build/github-markdown.css': 'node_modules/github-markdown-css/github-markdown.css'
    },
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
        template: 'template.jst'
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

  grunt.registerTask('default', ['clean','copy','watch']);
};

