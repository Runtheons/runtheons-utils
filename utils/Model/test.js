const Model = require("./index");

class B extends Model {}

class A extends Model {
	static includes = {
		pippo: B,
	};
}

var a = A.map({ gino: 1, "pippo.a": 1, "pippo.b": 2 });
console.log(a);