const moment = require("moment");

module.exports = function() {
    var y = "SZRUNTHEON".split("");
    var m = "ZEXALISBET".split("");
    var d = "DAYZERONER".split("");
    var h = "TERKOLEMPA".split("");
    var i = "7569824103".split("");

    var da = moment();
    da = da.format("YYMMDDHHmmss");
    da = da.split("");
    var r = []
    r[0] = y[parseInt(da[10])];
    r[1] = y[parseInt(da[1])];
    r[2] = i[parseInt(da[8])];
    r[3] = d[parseInt(da[4])];
    r[4] = m[parseInt(da[2])];
    r[5] = h[parseInt(da[6])];
    r[6] = d[parseInt(da[5])];
    r[7] = i[parseInt(da[9])];
    r[8] = m[parseInt(da[3])];
    r[9] = h[parseInt(da[7])];

    r = r.join("");

    var t = Math.random() * (9 - 7) + 7;
    r = r.substring(0, t - 1) + "-" + r.substring(t - 1);

    t = Math.random() * (5 - 3) + 3;
    r = r.substring(0, t - 1) + "-" + r.substring(t - 1);

    return r;
}