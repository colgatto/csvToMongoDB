var dbName = "csv";
var fs = require('fs');
var mongojs = require('mongojs');
var db = mongojs('127.0.0.1:27017/'+dbName);
//----------------------------
readFiles('csv/',function(filename,content){
	var name=filename.split('.');
	if(name[name.length-1]==="csv")
		csvToMongo(name[0].replace(/ /g,"X").replace(/\(/g,"X").replace(/\)/g,"X"),content);
},function(err){
	throw err;
});
//----------------------------
function csvToMongo(name,data){
	console.log('db.createCollection("'+name+'");');
	var dataRow=data.split('\n');
	var names=strToArr(dataRow[0]);
	for(var i=1;i<dataRow.length-1;i++){
		var row = strToArr(dataRow[i]);
		console.log("db."+name+".insert({");
		for(var j=0;j<names.length;j++)
			console.log(names[j]+':"'+(typeof row[j] === "undefined" ? "" : row[j] )+'",');
		console.log("});\n\n");
	}
}
//----------------------------
function readFiles(dirname,onFileContent,onError){
	fs.readdir(dirname,function(err,filenames){
		if(err){
			onError(err);
			return;
		}
		filenames.forEach(function(filename){
			fs.readFile(dirname+filename,'utf8',function(err,content){
				if(err){
					onError(err);
					return;
				}
				onFileContent(filename,content);
			});
		});
	});
}
//----------------------------
function strToArr(s){
	a=[];
	ss="";
	instring=0;
	for(i=0;i<s.length;i++){
		switch(s[i]){
			case "\"":
				instring=!instring;
				break;
			case ";":
				if(!instring){
					a.push(ss);
					ss="";
				}else
					ss+=";";
				break;
			default:
				ss+=s[i];
				break;
		}
	}
	return a;
}
