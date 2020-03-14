module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin:{
      options:{
        removeComments: true,
        collapseWhitespace: true
      },
      files:{
        src:"./dist/index.html",
        dest:"./dist/index.html"
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/index.min.css': './css/*.css'
        }
      }
    },
    uglify:{
      release:{
        files:{
          "./dist/index.min.js":"./index.js"
        }
      }
    },
    copy: {
      html: {
        src: './index.html',
        dest: './dist/index.html'
      },
      images:{
        src: ['./images/*.{png,jpg,gif}'],
        dest: './dist/'
      }
    },
    useminPrepare: {
      html: './index.html',
      options: {
        dest: './dist'
      }
    },
    usemin: {
      html: ['./dist/index.html']
    }
  })

  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask("release",['copy','cssmin','uglify','useminPrepare', 'usemin','htmlmin'])
};