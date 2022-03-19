const assert = require("assert");
const fs = require("fs");

const { TemplateManager } = require("./../index");

describe("Template Manager", function() {
	it("Example", async() => {
		fs.writeFileSync("./test.ejs", `Ciao <%= data %>`);
		const html = await TemplateManager.load("./test.ejs", {
			data: "Zexal0807",
		});
		assert.equal(html, "Ciao Zexal0807");
		fs.rmSync("./test.ejs");
	});

	it("With incorrect data", async() => {
		fs.writeFileSync("./test.ejs", `Ciao <%= data %>`);
		const html = await TemplateManager.load("./test.ejs", {
			sata: "Zexal0807",
		});
		assert.equal(html, "");
		fs.rmSync("./test.ejs");
	});
});