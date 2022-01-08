var config = () => {
	const path = require("path");
	var root = module.parent.filename;
	root = path.dirname(root);

	return require("./utils/Config/index.js")(root);
};

module.exports = {
	TokenGenerator: require("./utils/TokenGenerator/index.js"),
	TemplateManager: require("./utils/TemplateManager/index.js"),
	CouponCode: require("./utils/CouponCode/index.js"),
	Logger: require("./utils/Logger/index.js"),
	Config: config(),
};