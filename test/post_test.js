var expect = require('chai').expect,
Counter= require('../lib/counter');

describe('Counter object tests', function() {
	var counter;

	beforeEach(function() {
		counter = new Counter('A test counter');
	});

	describe('creation and incrementation', function () {

		it('counter value is 0 after object created', function() {
			expect(counter.getValue()).to.equal(0);
		});

		it('counter value after increment is one more than before', function() {
			counter.increment();
			expect(counter.getValue()).to.equal(1);
		});
	});
})