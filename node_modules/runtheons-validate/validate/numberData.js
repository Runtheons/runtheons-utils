const superData = require("./superData");

//Numeric data (int, double, float..)
class numberData extends superData{
	
	constructor(){
		super();
		this.attr = ["min", "max", "required"];
	}
	
	validate(property, schema, value, errors){
		if(typeof value != "number"){
			errors.push(property+" is not a number");
		}else{
			super.validate(property, schema, value, errors);
		}
	}
}

exports.int = class intData extends numberData{
	//Per gli int controllo che non abbia parte decimale dividendo per 1
	validate(property, schema, value, errors){
		if(value%1 != 0){
			errors.push(property+" is not int");
		}else
		super.validate(property, schema, value, errors);
	}
}

exports.float = class floatData extends numberData{}

exports.double = class doubleData extends numberData{}