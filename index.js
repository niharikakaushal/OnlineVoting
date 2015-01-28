var express = require('express');

var app = express();

//Configure settings in config file

var Flickr = require("node-flickr");
var keys = {"api_key": "8525d9d3c734bbca229752748c605d62"}
flickr = new Flickr(keys),
fs = require('fs'),
http = require('http'),
path = './public/photos/' ;
 var files = fs.readdirSync(path);
 for(var k in files)
 {
 	fs.unlinkSync(path+files[k]);
 }

flickr.get("photos.search", {"tags":"cutepuppies"}, function(result){
	for(var i=1;i<6;i++)		
    	{
    		(function(i){
    		var photo = result.photos.photo[i];
    		
			request = http.get('http://farm'+photo.farm+'.static.flickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'.jpg', function(response) 
			{
 			var file = fs.createWriteStream('./public/photos/cutepuppies'+i+'.jpg');
 				response.pipe(file);
 				var temp = '';
 				response.on('data', function(d) {
            	temp += d;
        		});
 				response.on('end', function() {
    				console.log('Image has been saved successfully');
    								});
			});
		})(i);
		}
	});

require('./config')(app);

// Add the routes that the app will react to as defined in our routes.js file

require('./routes')(app);


app.listen(3000);

console.log('Your application is running on http://localhost:3000');

