module.exports = new class TokenGenerator {

	n1 = 10003794;
	n2 = 239746;

	letter = [
		"p", "q", "e", "h", "l",
		"o", "x", "b", "w", "f",
		"r", "m", "u", "d", "g",
		"i", "a", "z", "s", "j",
		"t", "n", "v", "c", "k", "y"
	];

	sort(n) {
		if (typeof n != "string")
			n = n + "";

		for (var i = n.length; i < 8; i++) {
			n = "0" + n;
		}

		var tmp = n.split("");

		var ret = [];
		ret[0] = tmp[6];
		ret[1] = tmp[2];
		ret[2] = tmp[5];
		ret[3] = tmp[3];
		ret[4] = tmp[7];
		ret[5] = tmp[1];
		ret[6] = tmp[4];
		ret[7] = tmp[0];

		return parseInt(ret.join(""));
	}

	unsort(n) {
		if (typeof n != "string")
			n = n + "";

		for (var i = n.length; i < 8; i++) {
			n = "0" + n;
		}

		var tmp = n.split("");

		var ret = [];
		ret[0] = tmp[7];
		ret[1] = tmp[5];
		ret[2] = tmp[1];
		ret[3] = tmp[3];
		ret[4] = tmp[6];
		ret[5] = tmp[2];
		ret[6] = tmp[0];
		ret[7] = tmp[4];
		return parseInt(ret.join(""));
	}

	encrypt64Bit(num) {
		var n = num + this.n1;

		n = this.sort(n);

		n = n + this.n2;

		n = this.sort(n);

		n = n + "";
		n = n.split("");

		var tmp = new Date().getTime();

		for (let i = 0; i < 8; i++) {
			n[i] = this.letter[tmp % 26] + n[i];
			tmp += Math.floor((Math.random() * 4) + 5);
		}
		n = n.join("");
		return n;
	}

	decrypt64Bit(num) {
		var tmp = num.split("");
		tmp = tmp[1] + tmp[3] + tmp[5] + tmp[7] + tmp[9] + tmp[11] + tmp[13] + tmp[15];

		var n = this.unsort(tmp);

		n = n - this.n2;

		n = this.unsort(n);

		return n - this.n1;
	}

	encrypt128Bit(num) {
		var n = this.encrypt64Bit(num);
		var tmp = n.split("");
		n = [];

		var t = new Date().getTime();
		var r;
		for (var i = 0; i < 8; i++) {
			r = Math.floor((Math.random() * 9));
			t += r;
			n[i * 8] = tmp[i * 2];
			n[i * 8 + 1] = r;
			n[i * 8 + 2] = this.letter[t % 26];
			n[i * 8 + 3] = tmp[i * 2 + 1];
		}

		n = n.join("");
		return n;
	}

	decrypt128Bit(num) {
		var n = num.split("");
		n = n[0] + n[3] + n[4] + n[7] + n[8] + n[11] + n[12] + n[15] + n[16] + n[19] + n[20] + n[23] + n[24] + n[27] + n[28] + n[31];
		return this.decrypt64Bit(n);
	}

}