const assert = require("assert");

const { CouponCode } = require("./../index");

describe("Coupon Code", function() {
	it("Example", async() => {
		const result = await CouponCode.generate();
		assert.notEqual(result, undefined);
	});
});