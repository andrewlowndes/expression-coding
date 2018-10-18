module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      '../node_modules/systemjs/dist/system.js',
      '../config/system.conf.js',
      { pattern: '../src/**/*.ts' }
    ],
    preprocessors: {
      '../src/**/*.ts': 'karma-typescript'
    },
    reporters: ['dots', 'karma-typescript'],
    browsers: ['Chrome'],
    karmaTypescriptConfig: {
      extends: './base.tsconfig.json',
      compilerOptions: {
        noImplicitAny: false,
        sourceMap: true
      },
      include: [
        '../src/**/*'
      ],
      reports: {
        "cobertura": {
          "directory": "coverage",
          "filename": "../cov.xml"
        },
        "html": "coverage"
      }
    }
  });
};
