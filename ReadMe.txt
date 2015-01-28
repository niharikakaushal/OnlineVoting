Details:

1. Using express, express3-handlebars,node-flickr and nedb for implementation of the sample project.
2. Start the application with index.js page
3. Index.js page -	
	a. Call flicker api, provided api_key.
	b. Delete all previously downloaded images from ./public/photos folder.
	c. Search images using flickr API and tag as "cute puppies".
	d. Save the first 6 images to ./public/photos folder.
	e. Call config.js and routes.js page to define configuration and the routes to be followed for application.
	b. In the config page, templates, paths and layouts are defined.
	c. In the routes page, call database.js which initializes 2 datastores(users and photo) and creates unique index with name, like and dislike variables for photo.
	d. At home page,find current user and all photos and display the photos which hasn't been voted yet by user. It is done by referring to the IP address of user.
	e. Photos are displayed by randomly selecting them from the folder.
	f. If user open Result page, it will display the photos in sorted array with highest liked photo on top with decreasing order.
	g. Add user's ip address to database, so that user can't vote same photo twice.
	h. Whenever user clicks - like or dislike, update the database accordingly.
4. CSS stylesheet is defined and stored at./public/css folder.
5. Layouts and views are stored at ./views folder.
 

