var fs = require('fs');
var jsonfile = require('jsonfile')
var junk = require('junk');
var file = 'fileList.json'
var json = require('../fileList.json')

var data = {};
data["project"] = []
function projectInfo(folder, imageLink, name, properties){
	this.folder = folder
	this.imageLink = imageLink
	this.name = name;
	this.properties = properties;
}

var folderPath = json.project;

for(i=0; i<json.project.length; i++){
	var files = fs.readdirSync(folderPath[i].folder)
	var filesFilered = files.filter(junk.not);
	for(j = 0; j < filesFilered.length; j++){
		filecheck = filesFilered[j].split('.');
		if(filecheck[0] === 'properties'){
			folder = folderPath[i].folder;
			imageLink = folderPath[i].imageLink;
			name = folderPath[i].name;
			filePath = folderPath[i].folder + '/' + filesFilered[j];
			fileread = fs.readFileSync(filePath, 'utf8');
			var properties = [];
			var splitter = fileread.split('|');
			var propOne = splitter[0];
			var propTwo = splitter[1];
			var propThree = splitter[2];
			var propFour = splitter[3];
			var propFive = splitter[4];
			var propSixe = splitter[5];
			var propseven = splitter[6];
			properties.push(splitter[0],splitter[1],splitter[2],splitter[3],splitter[4],splitter[5],splitter[6]);
			console.log(fileread);
			data.project[i] = new projectInfo(folder, imageLink, name, properties);
			console.log('adding name of project...');
			jsonfile.writeFile(file, data, function(err) {
					console.log("this is not working", err);
			});
		}
	}
}
