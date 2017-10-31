var ghpages = require('gh-pages');
var path = require('path');

// ghpages.publish(path.join(__dirname, 'dist'));

ghpages.publish('dist', {
	branch: 'gh-pages',
	repo: 'https://github.com/Strangeflock/Webpack-Template.git'
  });