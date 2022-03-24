module.exports = function(url, params) {
	if (typeof params !== 'object') {
		throw new Error('params must be an object');
	}
	for (const [key, value] of Object.entries(params)) {
		url = url.replace(':' + key, value);
	}
	return url.toLowerCase();
};