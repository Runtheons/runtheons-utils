//Definizione di un generale valore

module.exports = class superData{
	
	constructor(){
		this.attr = ["min", "max", "required"];
	}
	
	validate(property, schema, value, errors){
		for (const pp in schema) {
			if(this.attr.includes(pp)){
				this[pp](property, schema, value, errors);
			}
		}
	}
	
	min(property, schema, value, errors){
		if(value < schema['min']){
			errors.push(property+" is lower than "+schema['min']);
		}
	}
	
	max(property, schema, value, errors){
		if(value > schema['max']){
			errors.push(property+" is greater than "+schema['max']);
		}
	}
	
	required(property, schema, value, errors){
		if(value == undefined || value == null || value == ""){
			errors.push(property+" is required");
		}
	}
	
}