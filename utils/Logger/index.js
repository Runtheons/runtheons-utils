module.exports = new(class Logger {
	printDebugFile(debug) {
		const fs = require("fs");
		return new Promise((resolve, reject) => {
			var path = "./debug/";
			if (!fs.existsSync(path)) {
				fs.mkdirSync(path, { recursive: true });
			}
			var time = new Date();
			path += time.toISOString().slice(0, 10) + " ";

			path += time.toString().slice(16, 24).replace(/:/g, "-");

			if (fs.existsSync(path + ".txt")) {
				path += "-" + Math.floor(Math.random() * 1000 + 1);
			}

			path += ".txt";
			fs.open(path, "a", function(e, file) {
				if (e) throw e;
				var str = require("util").inspect(debug);
				str = str + "\n\r";
				fs.write(file, str, function(er) {
					if (er) throw er;
					fs.close(file, function() {
						return resolve();
					});
				});
			});
		});
	}
})();