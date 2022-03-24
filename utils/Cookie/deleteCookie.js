module.exports = function(cname) {
	const setCookie = require('./setCookie');
	const checkCookie = require('./checkCookie');
	setCookie(cname, '', new Date(0).toUTCString());
	return !checkCookie(cname);
};