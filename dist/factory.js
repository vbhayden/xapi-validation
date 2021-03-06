"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var values = require("./values");
var requireFile = function (file) {
    return function (ruleAccessor) {
        return function (data, path) {
            return ruleAccessor(require(file))(data, path);
        };
    };
};
var requireMap = requireFile('./maps');
var requireRule = function (file) { return requireFile(file)(function (mod) { return mod.default; }); };
exports.anyValue = values.anyValue;
exports.account = requireRule('./schemaRules/account');
exports.activity = requireRule('./schemaRules/activity');
exports.actor = requireRule('./schemaRules/actor');
exports.agent = requireRule('./schemaRules/agent');
exports.attachment = requireRule('./schemaRules/attachment');
exports.authority = requireRule('./schemaRules/authority');
exports.booleanValue = values.booleanValue;
exports.context = requireRule('./schemaRules/context');
exports.definition = requireRule('./schemaRules/definition');
exports.duration = requireRule('./regexValues/duration');
exports.extensions = requireMap(function (maps) { return maps.extensions; });
exports.group = requireRule('./schemaRules/group');
exports.groupAuthority = requireRule('./schemaRules/groupAuthority');
exports.imt = requireRule('./regexValues/imt');
exports.integerValue = values.integerValue;
exports.interactionComponent = requireRule('./schemaRules/interactionComponent');
exports.interactionType = requireRule('./regexValues/interactionType');
exports.iri = requireRule('./regexValues/iri');
exports.language = requireRule('./regexValues/language');
exports.languageMap = requireMap(function (maps) { return maps.languageMap; });
exports.mailto = requireRule('./regexValues/mailto');
exports.numberValue = values.numberValue;
exports.object = requireRule('./schemaRules/object');
exports.result = requireRule('./schemaRules/result');
exports.scaledValue = values.scaledValue;
exports.sha1 = requireRule('./regexValues/sha1');
exports.statement = requireRule('./schemaRules/statement');
exports.statementRef = requireRule('./schemaRules/statementRef');
exports.stringValue = values.stringValue;
exports.subStatement = requireRule('./schemaRules/subStatement');
exports.timestamp = requireRule('./regexValues/timestamp');
exports.uuid = requireRule('./regexValues/uuid');
exports.verb = requireRule('./schemaRules/verb');
exports.version = requireRule('./regexValues/version');
//# sourceMappingURL=factory.js.map