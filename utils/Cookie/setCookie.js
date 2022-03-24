module.exports = function(cname, cvalue, exdays) {
	if (typeof document === 'undefined') return false;
	try {
		let d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		let expires = 'expires=' + d.toUTCString();
		document.cookie = `${cname}=${encodeURIComponent(
			cvalue
		)};${expires};path=/;`;
		return true;
	} catch (e) {
		return false;
	}
};