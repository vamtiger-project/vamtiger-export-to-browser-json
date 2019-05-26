"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Selector;
(function (Selector) {
    Selector["jsonScript"] = "script[type=\"application/json\"]";
})(Selector = exports.Selector || (exports.Selector = {}));
var Extension;
(function (Extension) {
    Extension["json"] = "json";
    Extension["js"] = "js";
})(Extension = exports.Extension || (exports.Extension = {}));
var StringConstant;
(function (StringConstant) {
    StringConstant["nothing"] = "";
    StringConstant["period"] = ".";
    StringConstant["space"] = " ";
    StringConstant["backTick"] = "`";
})(StringConstant = exports.StringConstant || (exports.StringConstant = {}));
var CommandlineArgument;
(function (CommandlineArgument) {
    CommandlineArgument["file"] = "file";
})(CommandlineArgument = exports.CommandlineArgument || (exports.CommandlineArgument = {}));
var CommandlineArgumentShort;
(function (CommandlineArgumentShort) {
    CommandlineArgumentShort["file"] = "f";
})(CommandlineArgumentShort = exports.CommandlineArgumentShort || (exports.CommandlineArgumentShort = {}));
var MimeType;
(function (MimeType) {
    MimeType["json"] = "application/json";
})(MimeType = exports.MimeType || (exports.MimeType = {}));
exports.regex = {
    newlines: /\n/msg,
    multiSpaces: /\s{2,}/msg,
    backTicks: /`/msg,
    doubleQuotes: /"/msg
};
//# sourceMappingURL=types.js.map