module.exports = {
	CouponCode: require('./utils/CouponCode/index.js'),
	Logger: require('./utils/Logger/index.js'),
	TokenGenerator: require('./utils/TokenGenerator/index.js'),
	TemplateManager: require('./utils/TemplateManager/index.js'),
	ajax: require('./utils/Ajax/index.js'),
	urlBuilder: require('./utils/UrlBuilder/index.js'),
	checkCookie: require('./utils/Cookie/checkCookie.js'),
	deleteAllDomainCookie: require('./utils/Cookie/deleteAllDomainCookie.js'),
	deleteCookie: require('./utils/Cookie/deleteCookie.js'),
	getCookie: require('./utils/Cookie/getCookie.js'),
	setCookie: require('./utils/Cookie/setCookie.js')
};