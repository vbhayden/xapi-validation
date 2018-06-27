"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireTest = function (rule) { return function (test) {
    return require(rule).default(test);
}; };
exports.account = requireTest('./schemaRules/account');
exports.activity = requireTest('./schemaRules/activity');
exports.actor = requireTest('./schemaRules/actor');
exports.agent = requireTest('./schemaRules/agent');
exports.attachment = requireTest('./schemaRules/attachment');
exports.authority = requireTest('./schemaRules/authority');
exports.booleanValue = requireTest('./values/boolean');
exports.context = requireTest('./schemaRules/context');
exports.contextActivities = requireTest('./schemaRules/contextActivities');
exports.definition = requireTest('./schemaRules/definition');
exports.duration = requireTest('./regexValues/duration');
exports.extensions = requireTest('./maps/extensions');
exports.group = requireTest('./schemaRules/group');
exports.subGroup = requireTest('./schemaRules/subGroup');
exports.imt = requireTest('./regexValues/imt');
exports.integerValue = requireTest('./values/integer');
exports.interactionComponent = requireTest('./schemaRules/interactionComponent');
exports.interactionType = requireTest('./regexValues/interactionType');
exports.iri = requireTest('./regexValues/iri');
exports.language = requireTest('./regexValues/language');
exports.languageMap = requireTest('./maps/languageMap');
exports.mailto = requireTest('./regexValues/mailto');
exports.numberValue = requireTest('./values/number');
exports.object = requireTest('./schemaRules/object');
exports.result = requireTest('./schemaRules/result');
exports.scaledValue = requireTest('./values/scaled');
exports.score = requireTest('./schemaRules/score');
exports.sha1 = requireTest('./regexValues/sha1');
exports.statement = requireTest('./schemaRules/statement');
exports.statementRef = requireTest('./schemaRules/statementRef');
exports.stringValue = requireTest('./values/string');
exports.subStatement = requireTest('./schemaRules/subStatement');
exports.subStatementObject = requireTest('./schemaRules/subStatementObject');
exports.timestamp = requireTest('./regexValues/timestamp');
exports.uuid = requireTest('./regexValues/uuid');
exports.verb = requireTest('./schemaRules/verb');
exports.version = requireTest('./regexValues/version');
//# sourceMappingURL=factory.js.map