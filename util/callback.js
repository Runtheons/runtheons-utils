const validator = require("runtheons-validate");
console.log('callback pre inner');

module.exports = (req, res, api) => {
  data = [];
  console.log('callback inner');
  //metto in data i dati ricevuti nella query string
  Object.keys(req.params).forEach(function(key){
	let value = req.params[key];	
	if(""+Number(value) == value){
		data[key] = Number(value);
	}else{
		data[key] = value;
	}
  });
  
  //metto in data i dati ricevuti nel request body
  Object.keys(req.body).forEach(function(key){
	let value = req.body[key];	
	if(""+Number(value) == value){
		data[key] = Number(value);
	}else{
		data[key] = value;
	}
  });
  
  //metto in data i dati ricevuti come files
  if(req.files){
    Object.keys(req.files).forEach(function(key){
      data[key] = req.files[key];
    });
  }
  
  try{
  var valid = validator.validate(api.schema, data);

    if(valid.result)
      api.api(data, res);
    else
      res.jsonp(valid.errors);
  }catch(e){
	  console.log(e);
    res.jsonp(e.path + ': ' + e.message);
  }
};