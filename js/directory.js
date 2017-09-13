var fs = require('fs');
var jsonfile = require('jsonfile')
var junk = require('junk');
var file = 'fileList.json'

var data = {};
data["project"] = []
function projectInfo(folder, imageLink, name, description){
	this.folder = folder
	this.imageLink = imageLink
	this.name = name
	this.description = description
}

var folders = [];

fs.readdir('./images', function(err, files) {
    if (err) return;
    files.filter(junk.not).forEach(function(f, index) {
	    //gets the folder
			console.log(data);
			var folderPath = './images/' + f;
			data.project[index] = new projectInfo(folderPath);
			console.log('loooking for folders...');
			console.log(data);
			jsonfile.writeFile(file, data, function(err) {
			console.log("this is not working", err);
			folders.push(f);
		}); 
	});
});
