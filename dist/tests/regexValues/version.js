"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
var validData = '1.0.0';
exports.default = (function (test) {
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default('1.0', test);
    itsValid_1.default(validData, test);
});
//# sourceMappingURL=version.js.map