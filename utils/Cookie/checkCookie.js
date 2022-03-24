module.exports = function(cname) {
	const getCookie = require('./getCookie');
	return getCookie(cname) !== '';
};