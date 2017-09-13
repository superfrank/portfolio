var fs = require('fs');
var jsonfile = require('jsonfile')
var junk = require('junk');
var file = 'fileList.json'
var json = require('../fileList.json')

var data = {};
data["project"] = []
function projectInfo(folder, imageLink, name, properties, description, images, classname){
	this.folder = folder
	this.imageLink = imageLink
	this.name = name;
	this.properties = properties;
	this.description = description;
	this.images = images;
	this.classname = classname;
}

var folderPath = json.project;
console.log(folderPath[0].folder + '/images');
for(i=0; i<json.project.length; i++){
	var files = fs.readdirSync(folderPath[i].folder + '/images')
	var filesFilered = files.filter(junk.not);
	var images = [];
	for(j = 0; j < filesFilered.length; j++){
		filecheck = filesFilered[j].split('.');
		if(filecheck[1] === 'jpeg' || filecheck[1] === 'png' || filecheck[1] === 'jpg' || filecheck[1] === 'gif'){
			folder = folderPath[i].folder;
			imageLink = folderPath[i].imageLink;
			name = folderPath[i].name;
			properties = folderPath[i].properties;
			description = folderPath[i].description;
			var className = name.replace(/\s/g, '');;
			var classLower = className.toLowerCase();
			images.push(filesFilered[j]);
			console.log('adding images...');
			data.project[i] = new projectInfo(folder, imageLink, name, properties, description, images, classLower);
			jsonfile.writeFile(file, data, function(err) {
				console.log("this is not working", err);
			});
		}
	}
}
