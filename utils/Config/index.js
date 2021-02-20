const _ = require("lodash");
const path = require("path")

module.exports = (root) => {

	var base = path.join(root, "./config/");

	const defaults = require(base + "defaults.json");

	const envConf = require(base + (process.env.NODE_ENV || "development") + ".json");

	var c = _.defaultsDeep(envConf, defaults);

	return c;
}