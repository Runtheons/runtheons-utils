module.exports = function(cname) {
	if (typeof document === 'undefined') return '';

	let name = cname + '=';
	let ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return decodeURIComponent(c.substring(name.length, c.length));
		}
	}
	return '';
};