const numberData = require("./numberData");
const stringData = require("./stringData");
const dateData = require("./dateData");
const fileData = require("./fileData");

module.exports = {
	int : new numberData.int,
	float : new numberData.float,
	double : new numberData.double,
	
	string : new stringData.string,
	email : new stringData.email,
	link : new stringData.link,
	
	date : new dateData.date,
	dateTime : new dateData.dateTime,
	time : new dateData.time,
	
	file : new fileData.file
	//Here we can add new type
};
