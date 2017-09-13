var fs = require('fs');
var jsonfile = require('jsonfile')
var junk = require('junk');
var file = 'fileList.json'
var json = require('../fileList.json')

var data = {};
data["project"] = []
function projectInfo(folder, imageLink, name, properties, description){
	this.folder = folder
	this.imageLink = imageLink
	this.name = name;
	this.properties = properties;
	this.description = description;
}

var folderPath = json.project;

for(i=0; i<json.project.length; i++){
	var files = fs.readdirSync(folderPath[i].folder)
	var filesFilered = files.filter(junk.not);
	for(j = 0; j < filesFilered.length; j++){
		filecheck = filesFilered[j].split('.');
		if(filecheck[0] === 'description'){
			folder = folderPath[i].folder;
			imageLink = folderPath[i].imageLink;
			fileread = folderPath[i].name;
			properties = folderPath[i].properties;			
			desLink = filesFilered[j];
			desPath = folderPath[i].folder + '/' + desLink;
			desread = fs.readFileSync(desPath, 'utf8');
			data.project[i] = new projectInfo(folder, imageLink, fileread, properties, desread);
			console.log('adding descriptions...');
			jsonfile.writeFile(file, data, function(err) {
					console.log("this is not working", err);
			});
		}	
	}
}