const ejs = require("ejs");

const Logger = require("./../Logger/index.js");

exports.load = (filename, data, options = {}) => {
	return new Promise((resolve, reject) => {
		ejs.renderFile(filename, data, options, function(err, html) {
			if (err) {
				Logger.printDebugFile(err);
				return resolve("");
			}
			return resolve(html);
		});
	});
};