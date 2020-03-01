const headerInfo = (req, res) => {
	console.log(req);
	const { rawHeaders } = req;

	const index = rawHeaders.reduce((acc, value, index, array) => {
		if (value === 'Accept-Language') {
			acc['language'] = array[index + 1];
		}
		if (value === 'User-Agent') {
			acc['software'] = array[index + 1];
		}
		return acc;
	}, {});
	index['ipaddress'] = req.ip;
	res.json(index);
};

module.exports = { headerInfo };
