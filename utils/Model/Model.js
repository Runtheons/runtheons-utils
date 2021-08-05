class Model {
	static config = {
		separetor: "_",
	};
	static includes = {
		gino: class A extends Model {},
	};

	constructor(data) {
		var parsedData = Model._map(data);
		Object.assign(this, parsedData);
	}

	static _map(data) {
		var object = {};
		var keys = Object.keys(data);
		keys.forEach((key) => {
			key = "" + key;
			var value = data[key];
			var tmpObject = object;
			var found;
			do {
				found = key.indexOf(Model.config.separetor);
				if (found >= 0) {
					var pre = key.substring(0, found);
					key = key.substring(found + 1);
					if (tmpObject[pre] == undefined) {
						tmpObject[pre] = {};
					}
					tmpObject = tmpObject[pre];
				} else {
					tmpObject[key] = value;
				}
			} while (found >= 0);
		});
		return object;
	}
	static _include(data) {
		Object.keys(this.includes).forEach((key) => {});
	}
}

module.exports = Model;