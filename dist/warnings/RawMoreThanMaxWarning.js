"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var RawMoreThanMaxWarning = (function (_super) {
    __extends(RawMoreThanMaxWarning, _super);
    function RawMoreThanMaxWarning(data, path, raw, max) {
        var _this = _super.call(this, data, path) || this;
        _this.raw = raw;
        _this.max = max;
        return _this;
    }
    return RawMoreThanMaxWarning;
}(rulr_1.Warning));
exports.default = RawMoreThanMaxWarning;
//# sourceMappingURL=RawMoreThanMaxWarning.js.map