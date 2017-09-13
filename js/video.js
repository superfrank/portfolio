var fs = require('fs');
var jsonfile = require('jsonfile')
var junk = require('junk');
var file = 'fileList.json'
var json = require('../fileList.json')

var data = {};
data["project"] = []
function projectInfo(folder, imageLink, name, description){
	this.folder = folder
	this.imageLink = imageLink
	this.name = name;
	this.description = description;
}

var folderPath = json.project;

for(i=0; i<json.project.length; i++){
	var files = fs.readdirSync(folderPath[i].folder)
	var filesFilered = files.filter(junk.not);
	for(j = 0; j < filesFilered.length; j++){
		console.log(i, j);
		filecheck = filesFilered[j].split('.');
		if(filecheck[1] === 'mp4'){
			folder = folderPath[i].folder;
			console.log(folderPath[i].folder, i);
			imageLink = filesFilered[j];
			console.log('adding videos...');
			data.project[i] = new projectInfo(folder, imageLink);
			jsonfile.writeFile(file, data, function(err) {
				console.log("this is not working", err);
			});
		}
	}
}