const ejs = require("ejs");

exports.load = (filename, data, options) => {
	return new Promise((resolve, reject) => {
		ejs.renderFile(filename, data, options, function(err, html) {
			resolve(html);
		});
	});
};