const should = require('should');
const Calc = require('./calc');

const calcInstance = new Calc();

describe('calculator test!', () => {
	it('calc should return 4', (done) => {
		let expect = 4;
		let actual = calcInstance.add(3, 1);

		actual.should.equal(expect);
		done();
	});
});
