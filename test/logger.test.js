const assert = require("assert");
const { execSync } = require("child_process");
const fs = require("fs");

const { Logger } = require("./../index");

describe("Logger", function() {
	it("Example", async() => {
		execSync("rm ./debug/* -rf");

		Logger.printDebugFile("TEST");

		var files = fs.readdirSync("./debug");

		assert.equal(files.length, 1);
	});
});