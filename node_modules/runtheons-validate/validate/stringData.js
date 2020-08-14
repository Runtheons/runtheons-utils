const superData = require("./superData");

//String data (string, date, datetime, ip, mac, email.....)
class stringData extends superData{
	
	constructor(){
		super();
		this.attr = ["required", "reg", "maxsize", "minsize"];
	}
	
	validate(property, schema, value, errors){
		if(typeof value != "string"){
			errors.push(property+" is not a string");
		}else{
			super.validate(property, schema, value, errors);
		}
	}
	
	reg(property, schema, value, errors){
		var reg = new RegExp(schema['reg']);
		if(reg.exec(value) != value){
			errors.push(property+" don't match the reg "+reg);
		}
	}
	
	minsize(property, schema, value, errors){
		if(value.length < schema['min']){
			errors.push(property+" length is lower than "+schema['min']);
		}
	}
	
	maxsize(property, schema, value, errors){
		if(value.length > schema['maxsize']){
			errors.push(property+" length is greater than "+schema['max']);
		}
	}
}

exports.string = stringData

exports.email = class emailData extends stringData{
	
	constructor(){
		super();
		this.attr = ["required"];
	}
	
	validate(property, schema, value, errors){
		super.validate(property, schema, value, errors);
		var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!reg.test(value)){
			errors.push(property+" is not a email");
		}
	}
}

exports.link = class linkData extends stringData{
	
	constructor(){
		super();
		this.attr = ["required"];
	}
	
	validate(property, schema, value, errors){
		super.validate(property, schema, value, errors);
		var reg = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/;
		if(!reg.test(value)){
			errors.push(property+" is not a link");
		}
	}
}