const assert = require("assert");
const fs = require("fs");

const { Logger } = require("./../index");

describe("Logger", function() {
	it("Example", async() => {
		if (fs.existsSync("./debug")) {
			fs.rmdirSync("./debug", { recursive: true });
		}

		await Logger.printDebugFile("TEST");

		var files = fs.readdirSync("./debug");

		assert.equal(files.length, 1);
		if (fs.existsSync("./debug")) {
			fs.rmdirSync("./debug", { recursive: true });
		}
	});
});