const validator = require("runtheons-validate");
const ret = require("./ret");

module.exports = (req, res, api) => {

    var authLevel = (api.auth != undefined ? api.auth : 0);
    var authorized = authen(req, authLevel);

    if (authorized) {
        data = [];
        //metto in data i dati ricevuti nella query string
        Object.keys(req.params).forEach(function(key) {
            let value = req.params[key];
            if ("" + Number(value) == value) {
                data[key] = Number(value);
            } else {
                data[key] = value;
            }
        });

        //metto in data i dati ricevuti nel request body
        Object.keys(req.body).forEach(function(key) {
            let value = req.body[key];
            if ("" + Number(value) == value) {
                data[key] = Number(value);
            } else {
                data[key] = value;
            }
        });

        //metto in data i dati ricevuti come files
        if (req.files) {
            Object.keys(req.files).forEach(function(key) {
                data[key] = req.files[key];
            });
        }
        try {
            var valid = validator.validate(api.schema, data);
            if (valid.result) {
                api.api(data, res, req.session);
            } else {
                res.json(ret({ error: valid.errors }, false));
            }
        } catch (e) {
            console.log(e);
            res.jsonp(e.path + ': ' + e.message);
        }
    } else {
        res.json(ret({ error: "User non authorized" }, false));
    }
};

function authen(req, auth) {
    /*
    	.... for future
    	IS_SOCIETY		0
    	IS_COACH		0
    	IS_PRO			0
    	IS_ATHLETE		0
    	IS_FAN			0
    	LOGGED			0
    */
    //..000000 = 0	-> Not logged
    //..000101 = 5	-> Logged as athlete
    //..000111 = 7	-> Logged as athlete and fan -> IMPOSSIBLE

    var bit = (auth).toString(2);
    var length = 6;
    for (let i = bit.length; i < length; i++) {
        bit = "0" + bit;
    }
    bit = bit.split("");
    bit = bit.reverse(); //Inverto per leggere da dx a sx

    //bit 0 -> Logged/Not Logged
    if (bit[0] == 1) {
        //Non loggato quando dovrebbe
        if (!req.session.idUser) {
            return false;
        }
    } else {
        //Loggato quando non serve (login)
        if (req.session.idUser) {
            return false;
        }
    }
    //bit 1 -> Fan/Not Fan
    if (bit[1] == 1) {
        if (req.session.userType != 1) {
            return false;
        }
    }
    //bit 2 -> Athlete/Not Athlete
    if (bit[2] == 1) {
        if (req.session.userType != 2) {
            return false;
        }
    }
    //bit 3 -> Professionist/Not Professionist
    if (bit[3] == 1) {
        if (req.session.userType != 3) {
            return false;
        }
    }
    //bit 4 -> Coach/Not Coach
    if (bit[4] == 1) {
        if (req.session.userType != 4) {
            return false;
        }
    }
    //bit 5 -> Socuety/Not Socuety
    if (bit[5] == 1) {
        if (req.session.userType != 5) {
            return false;
        }
    }

    return true;
}