// jshint strict: false
module.exports = function (config) {
  config.set({

    basePath: './',
    preprocessors: {
      'views/*.html': ['ng-html2js']
    },
    files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/angular-resource/angular-resource.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'app/app.js',
        'env/dev.js',
        'app/**/*.js',
        'views/*.html'
    ],

    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: false,

    reporters: ['progress'],

    frameworks: ['jasmine'],

    browsers: ['Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'my.templates'
    }

  });
};
