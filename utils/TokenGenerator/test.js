const TokenGenerator = require("./index");

var id = 123;
var crypt = TokenGenerator.encrypt64Bit(id);
console.log(crypt);
console.log(TokenGenerator.decrypt64Bit(crypt));

crypt = TokenGenerator.encrypt128Bit(id);
console.log(crypt);
console.log(TokenGenerator.decrypt128Bit(crypt));