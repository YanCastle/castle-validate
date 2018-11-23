"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message = {
    not_define: '%s not define type',
    type_error: '%s Type Error',
    string: '%s is not a string',
    number: '%s is not a number',
    array: '%s is not a array',
    required: '%s is required',
    string_min: '%s must be at least %n characters',
    string_max: '%s cannot be longer than %n characters',
    number_min: '%s cannot be less than %n',
    number_max: '%s cannot be greater than %n',
};
var FieldType;
(function (FieldType) {
    FieldType["not_define"] = "not_define";
    FieldType["type_error"] = "type_error";
    FieldType["required"] = "required";
    FieldType["string"] = "string";
    FieldType["string_min"] = "string_min";
    FieldType["string_max"] = "string_max";
    FieldType["number"] = "number";
    FieldType["number_min"] = "number_min";
    FieldType["number_max"] = "number_max";
    FieldType["array"] = "array";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
function replace(type, key, value) {
    let str = message[type].replace(/%s/, key);
    if (value)
        str = str.replace(/%n/, value);
    return str;
}
exports.replace = replace;
exports.default = message;
//# sourceMappingURL=message.js.map