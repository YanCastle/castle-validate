"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class Validate {
    constructor(Rules) {
        this.Rules = Rules;
    }
    validate(obj) {
        if ('object' == typeof obj) {
            let keys = Object.keys(obj);
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] && this.Rules[keys[i]]) {
                    this.validate_rule(obj[keys[i]], this.Rules[keys[i]], keys[i]);
                }
            }
        }
        else {
        }
    }
    findType(rules, type) {
        return rules[lodash_1.findIndex(rules, type)];
    }
    validate_rule(value, rules, field) {
        let parameter = { value: value, field: field };
        if (lodash_1.findIndex(rules, 'type') > -1)
            this.validate_type(parameter, this.findType(rules, 'type'));
        if (lodash_1.findIndex(rules, 'required') > -1)
            this.validate_required(parameter, this.findType(rules, 'required'));
        if (lodash_1.findIndex(rules, 'min') > -1)
            this.validate_min(parameter, this.findType(rules, 'min'));
    }
    validate_type({ value, field }, rules) {
        if (rules.type != typeof value)
            throw new Error(rules.message || `${field} is not a ${rules.type}`);
    }
    validate_required({ value, field }, rules) {
        if (this.isString(value) && "" == value.trim())
            throw new Error(rules.message || `${field} is required`);
    }
    validate_min({ value, field }, rules) {
        if (this.isString(value)) {
            if (value.length < rules.min)
                throw new Error(rules.message || `${field} must be at least ${rules.min} characters`);
        }
        if (this.isNumber(value)) {
            if (value < rules.min)
                throw new Error(rules.message || `${field} cannot be less than ${rules.min}`);
        }
    }
    isString(field) {
        return "string" == typeof field;
    }
    isNumber(field) {
        return "number" == typeof field;
    }
}
exports.Validate = Validate;
var Rules = {
    Name: [
        {
            type: "string",
            message: "姓名类型错误"
        },
        {
            required: true,
            message: "姓名必填"
        },
        {
            min: 1,
            message: "姓名最小为1个字符"
        },
        {
            max: 250,
            message: "姓名最大为250个字符"
        },
    ],
    Age: [
        {
            type: "number",
            message: "年龄类型错误"
        },
        {
            required: true,
            message: "年龄必填"
        },
        {
            min: 1,
            message: "年龄最小为1"
        },
        {
            max: 100,
            message: "年龄最大为100"
        },
    ]
};
const EditData = {
    Name: "张三",
    Age: 18
};
const v = new Validate(Rules);
v.validate(EditData);
//# sourceMappingURL=index.js.map