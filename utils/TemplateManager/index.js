const ejs = require("ejs");

module.exports = (filename, data, options, cb) => ejs.renderFile(filename, data, options, cb);