const { TokenGenerator } = require("./../index");

let values = [];
for (let i = 0; i < 10; i++) {
  values.push(Math.floor(Math.random() * 1000 + 1));
}

describe("Token Generator", function () {
  for (let i = 0; i < 10; i++) {
    it(`${values[i]} - 64Bit`, async () => {
      const crypt = TokenGenerator.encrypt64Bit(values[i]);
      const decrypt = TokenGenerator.decrypt64Bit(crypt);
      expect(values[i]).toBe(decrypt);
    });
    it(`${values[i]} - 128Bit`, async () => {
      const crypt = TokenGenerator.encrypt128Bit(values[i]);
      const decrypt = TokenGenerator.decrypt128Bit(crypt);
      expect(values[i]).toBe(decrypt);
    });
  }
});
