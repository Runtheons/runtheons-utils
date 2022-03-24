module.exports = function(
	url,
	method = 'GET',
	data = null,
	authorizationToken = false,
	file = false
) {
	return new Promise(async(resolve, reject) => {
		let axiosData = {
			method,
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			}
		};

		if (data) {
			axiosData.body = JSON.stringify(data);
		}

		if (file) {
			axiosData.headers = {
				'Content-Type': 'multipart/form-data'
			};
		}

		if (authorizationToken) {
			axiosData.headers.Authorization = `Bearer ${authorizationToken}`;
		}

		await fetch(url, axiosData)
			.then((response) => response.json())
			.then((response) => {
				if (response.status) resolve(response.data);
				else reject(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
};