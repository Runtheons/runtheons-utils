const stringData = require("./stringData").string;
const moment = require('moment');

//Date data
class dateData extends stringData{
	
	constructor(){
		super();
		this.attr = ["min", "max", "required", "minage", "maxage"];	
		//Attribuit x i quali serve una funzione, format viene eseguito sempre con un valore di default
		this.f = "YYYY-MM-DD";
	}
	
	validate(property, schema, value, errors){
		if(schema.format == undefined){
			schema.format = this.f;
		}
		this.format(property, schema, value, errors);
		super.validate(property, schema, value, errors);
	}
	
	min(property, schema, value, errors){
		var v = moment(value, schema['format'], true);
		var m = moment(schema['min'], schema['format'], true);
		if(!m.isValid()){
			errors.push("The min setted in "+property+" isn't in the correct format: "+schema['format']);
		}else{
			if(v.isValid()){//Non riporto più volte lo stesso errore
				//Entrmabi sono nel formato corretto
				var r = moment.min(v, m);	//Trovo il minimo tra i due
				if(r == v){		//Se il valore minimo non è quello dello schema -> errore
					errors.push(property+" is lower than "+schema['min']);
				}
			}	
		}
	}
	
	max(property, schema, value, errors){
		var v = moment(value, schema['format'], true);
		var m = moment(schema['max'], schema['format'], true);
		if(!m.isValid()){
			errors.push("The max setted in "+property+" isn't in the correct format: "+schema['format']);
		}else{
			if(v.isValid()){//Non riporto più volte lo stesso errore
				//Entrmabi sono nel formato corretto
				var r = moment.max(v, m);	//Trovo il massimo tra i due
				if(r == v){		//Se il valore massimo non è quello dello schema -> errore
					errors.push(property+" is greater than "+schema['max']);
				}
			}	
		}
	}
	
	minage(property, schema, value, errors){
		var v = moment(value);
		var m = moment().subtract(schema['minage']);
		var r = moment.min(v, m);	//Trovo il minimo tra i due
		if(r != v){		//Se il valore minimo non è il valore -> errore
			errors.push(property+" must be greater");	
		}
	}

	maxage(property, schema, value, errors){
		var v = moment(value);
		var m = moment().subtract(schema['maxage']);
		var r = moment.max(v, m);	//Trovo il minimo tra i due
		if(r != v){		//Se il valore minimo non è il valore -> errore
			errors.push(property+" must be lower");	
		}
	}
	
	format(property, schema, value, errors){
		//converte il valore in una data partendo dal format
		if(!moment(value, schema['format'], true).isValid()){
			errors.push(property+" isn't in the correct format: "+schema['format']);
		}
	}
	
}

exports.date = dateData

exports.dateTime = class dateTimeData extends dateData{
	
	constructor(){
		super();
		this.attr = ["min", "max", "required", "minage", "maxage", "format"];	
		this.f = "YYYY-MM-DD HH:mm:ss";
	}
	
}

exports.time = class timeData extends dateData{
	
	constructor(){
		super();
		this.attr = ["min", "max", "required", "minage", "maxage", "format"];	
		this.f = "HH:mm:ss";
	}
	
}