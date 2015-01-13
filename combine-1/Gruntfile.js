module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-combine-mq');
  grunt.initConfig({
    combine_mq: {
      options: {
        log: true
      },
      all: {
        expand: true,
        cwd: 'src/css',
        src: '*.css',
        dest: 'dist/'
      }
    }
  });
};

