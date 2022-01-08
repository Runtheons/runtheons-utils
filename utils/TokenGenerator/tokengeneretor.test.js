const assert = require("assert");

const TokenGenerator = require("./index");

const id = 123;

describe("Token Generator", function() {
	it("64Bit", async() => {
		const crypt = TokenGenerator.encrypt64Bit(id);
		const decrypt = TokenGenerator.decrypt64Bit(crypt);
		assert.equal(id, decrypt);
	});
	it("128Bit", async() => {
		const crypt = TokenGenerator.encrypt128Bit(id);
		const decrypt = TokenGenerator.decrypt128Bit(crypt);
		assert.equal(id, decrypt);
	});
});