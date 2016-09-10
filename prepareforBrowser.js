var browserify = require('browserify');
var fs = require('fs');
var walk    = require('walk');

var files   = [];

// Walker options
var walker  = walk.walk('./public/src', { followLinks: false });

walker.on('file', function(root, stat, next) {
	console.log('found fil');
    // Add this file to the list of files
    files.push(root + '/' + stat.name);
    next();
});

walker.on('end', function() {
    var b = browserify();
    console.log(arguments);
	b.add(files);

	var wstream = fs.createWriteStream('./public/browser_app.js');
	var readStream = b.bundle().pipe(wstream);
});
