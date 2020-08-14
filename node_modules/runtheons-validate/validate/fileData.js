const superData = require("./superData");

class fileData extends superData{
	
	constructor(){
		super();
		this.attr = ["required", "mimetype"];
	}
	
	validate(property, schema, value, errors){
		super.validate(property, schema, value, errors);
		if(
			value.name == undefined ||
			value.data == undefined ||
			value.size == undefined ||
			value.size <= 0 ||
			value.mimetype == undefined
		){
			errors.push(property+" is not a file");
		}
	}
	
	mimetype(property, schema, value, errors){
		value = value.mimeType;
		if(Array.isArray(schema['mimetype'])){
			var f = false;
			for(var i = 0; i < schema['mimetype'].length; i++){
				var reg = new RegExp(schema['mimetype'][i]);
				if(reg.exec(value) == value){
					f = true;
				}
			}
			if(!f){
				errors.push(property+"'s mimetype isn't in the avaible list");
			}
		}else{
			var reg = new RegExp(schema['mimetype']);
			if(reg.exec(value) != value){
				errors.push(property+"'s mimetype isn't "+reg);
			}
		}
	}
}

exports.file = fileData
