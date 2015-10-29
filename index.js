'use strict';

module.exports = function (iterable) {
	if (!iterable) {
		throw new Error('Expected a iterable');
	}

	var ret = [];

	for (var item of iterable) {
		ret.push(item);
	}

	return ret;
};
