class Model {
	static _config = {
		separetor: ".",
		includesSeparetor: ".",
	};
	static config = {};

	static map(data) {
		Object.assign(this.config, this._config);
		Object.assign(this.includes, {});
		var data = this._map(data);
		this._include(data);
		return new this(data);
	}

	constructor(data) {
		Object.assign(this, data);
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
				found = key.indexOf(this.config.separetor);
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
		Object.keys(this.includes).forEach((key) => {
			key = "" + key;
			var tmpObject = data;
			var pre = data;
			var subkeys = key.split(this.config.includesSeparetor);
			for (var i = 0; i < subkeys.length - 1; i++) {
				var subkey = subkeys[i];
				tmpObject = tmpObject[subkey];
				pre = tmpObject;
			}
			var subdata = tmpObject[subkeys[subkeys.length - 1]];
			var cl = this.includes[key].prototype.constructor;
			var value = new cl(subdata);
			pre[subkeys[subkeys.length - 1]] = value;
		});
	}
}

module.exports = Model;