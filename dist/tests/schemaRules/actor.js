"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectTypeFactory_1 = require("../helpers/objectTypeFactory");
var factory_1 = require("../factory");
exports.default = (function (test) {
    return objectTypeFactory_1.default({
        Agent: factory_1.agent,
        Group: factory_1.group,
    }, 'Agent', test, { mbox: 'mailto:test@example.org' });
});
//# sourceMappingURL=actor.js.map