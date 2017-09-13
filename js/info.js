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
		filecheck = filesFilered[j].split('.');
		if(filecheck[0] === 'info'){
			folder = folderPath[i].folder;
			imageLink = folderPath[i].imageLink;
			filePath = folderPath[i].folder + '/' + filesFilered[j];
			fileread = fs.readFileSync(filePath, 'utf8');
			console.log(fileread);
			data.project[i] = new projectInfo(folder, imageLink, fileread);
			console.log('adding name of project...');
			jsonfile.writeFile(file, data, function(err) {
					console.log("this is not working", err);
			});
		}	
	}
}

		