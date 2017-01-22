"use strict";
var rulr_1 = require("rulr");
var errors_1 = require("../errors");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rulr_1.composeRules([
    function (data, path) {
        var objectIsActivity = (data.object != null &&
            data.object.constructor === Object &&
            data.object.objectType === 'Activity');
        var hasInvalidProps = (data.context != null &&
            data.context.constructor === Object && (data.context.platform !== undefined ||
            data.context.revision !== undefined));
        var invalidContext = !objectIsActivity && hasInvalidProps;
        return invalidContext ? [errors_1.contextPropError()(path)] : [];
    },
    function (data, path) {
        var voidVerbId = 'http://adlnet.gov/expapi/verbs/voided';
        var objectIsStatementRef = (data.object && data.object.objectType === 'StatementRef');
        var verbIsVoid = data.verb && data.verb.id === voidVerbId;
        var hasVoidError = verbIsVoid && !objectIsStatementRef;
        return hasVoidError ? [errors_1.voidError(voidVerbId)(path)] : [];
    },
]);