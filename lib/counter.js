var Counter = function() {
	var count = 0;
	this.increment = function () {
		return count++;
	}
	this.getValue = function () {
		return count;
	}
}

module.exports = Counter;