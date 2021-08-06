const Model = require("./index");

class Sport extends Model {}
class Goal extends Model {}
class Speciality extends Model {}

class User extends Model {
	static includes = {
		asport: Sport,
		agoal: Goal,
		pgoal: Goal,
		pspeciality: Speciality,
	};
}

class Professionist extends User {}

User.addIsA(Professionist, (data) => {
	if (data.type == "PROFESSIONIST") {
		data.name = data.pname;
		data.surname = data.psurname;
		data.goal = data.pgoal;
		data.speciality = data.pspeciality;

		delete data.aname;
		delete data.asurname;
		delete data.agoal;
		delete data.asport;
		delete data.pname;
		delete data.psurname;
		delete data.pgoal;
		delete data.pspeciality;

		return true;
	}
	return false;
});

class Athlete extends User {}

User.addIsA(Athlete, (data) => {
	return data.type == "ATHLETE";
});

var a = User.map({
	id: 1,
	email: "test",
	type: "PROFESSIONIST",
	pname: "Mario",
	psurname: "Rossi",
	aname: null,
	asurname: null,
	"agoal.id": null,
	"agoal.description": null,
	"asport.id": null,
	"asport.description": null,
	"pgoal.id": 1,
	"pgoal.description": "BO",
	"pspeciality.id": 1,
	"pspeciality.description": "BO",
});
console.log(a);

console.log(Object.getPrototypeOf(a.constructor).name);