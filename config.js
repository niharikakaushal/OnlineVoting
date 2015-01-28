var handlebars = require('express3-handlebars'),
	express = require('express');

module.exports = function(app){

	app.engine('html', handlebars({ 
		defaultLayout: 'main',
		extname: ".html",
		layoutsDir: __dirname + '/views/layouts'
	}));

	// Set .html as the default template extension 
	app.set('view engine', 'html');

	// Setting path for templates
	app.set('views', __dirname + '/views');

	// Make the files in the public folder available to the world
	app.use(express.static(__dirname + '/public'));

	app.use(express.urlencoded());

};
