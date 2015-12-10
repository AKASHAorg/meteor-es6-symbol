const packageVersion = '0.0.1';
const npmVersion     = '3.0.1';

Package.describe({
  name:          'akasha:es6-symbol',
  version:       packageVersion,
  // Brief, one-line summary of the package.
  summary:       'es6-symbol wrapped for meteor',
  // URL to the Git repository containing the source code for this package.
  git:           'https://github.com/AkashaProject/meteor-es6-symbol',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'es6-symbol': npmVersion
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('es6-symbol.js', 'server');
  api.export('Symbol', 'server');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('akasha:es6-symbol');
  api.addFiles('es6-symbol-tests.js');
});
