const { CouponCode } = require('./../index');

describe('Coupon Code', function() {
	it('Example', async() => {
		const result = await CouponCode.generate();
		expect(result).not.toBe(undefined);
	});
});