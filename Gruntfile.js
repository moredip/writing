module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    copy: {
      'build/github-markdown.css': 'node_modules/github-markdown-css/github-markdown.css',
      'build/': 'images/**/*'
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
      images: {
        files: ['images/**/*'],
        tasks: ['copy'],
        options: {
          atBegin: true
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

