module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/*.js',
      'test/*.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch:true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false
  });
};
