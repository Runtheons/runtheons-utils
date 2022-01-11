const assert = require("assert");
const fs = require("fs");

const { Logger } = require("./../index");

describe("Token Generator", function() {
	it("Example", async() => {
		fs.rmdirSync("./debug", { recursive: true });

		Logger.printDebugFile("TEST");

		assert.equal(fs.existsSync("./debug"), true);
		var files = fs.readdirSync("./debug");

		assert.equal(files.length, 1);

		fs.rmdirSync("./debug", { recursive: true });
	});
});