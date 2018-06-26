"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
exports.default = (function (data) {
    if (!lodash_1.isPlainObject(data))
        return [];
    var ifis = ['mbox', 'mbox_sha1sum', 'openid', 'account'];
    var keys = Object.keys(data);
    return ifis.filter(function (ifi) { return keys.includes(ifi); });
});
//# sourceMappingURL=getUsedIfis.js.map