"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var TypeWarning_1 = require("../warnings/TypeWarning");
var regex = /^\w+:/i;
var warningConstructor = TypeWarning_1.createTypeWarning('Internationalized Resource Identifier (IRI)');
exports.default = rulr_1.checkRegex(regex, warningConstructor);
//# sourceMappingURL=iri.js.map