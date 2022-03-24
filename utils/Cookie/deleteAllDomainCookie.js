module.exports = function deleteAllDomainCookie() {
	const deleteCookie = require('./deleteCookie');
	if (typeof document === 'undefined') {
		return false;
	}
	try {
		let ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			deleteCookie(ca[i].split('=')[0]);
		}
		return true;
	} catch (e) {
		return false;
	}
};