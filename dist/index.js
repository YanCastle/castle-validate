"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validate {
    constructor(Rules) {
        this.Rules = Rules;
    }
    static isString(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'String';
    }
    static isNumber(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
    }
    static isInteger(o) {
        return Number.isInteger(o);
    }
    static isObj(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }
    static isArray(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
    }
    static isDate(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
    }
    static isBoolean(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
    }
    static isFunction(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
    }
    static isNull(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
    }
    static isUndefined(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
    }
    static isFalse(o) {
        if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN)
            return true;
        return false;
    }
    static isTrue(o) {
        return !this.isTrue(o);
    }
    static isPC() {
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"
        ];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    static mobile_terminal() {
        let u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            return "Android";
        }
        else if (u.indexOf('iPhone') > -1) {
            return "iPhone";
        }
        else if (u.indexOf('iPad') > -1) {
            return "iPad";
        }
        else if (u.indexOf('Windows Phone') > -1) {
            return "Windows Phone";
        }
        else {
            return false;
        }
    }
    static isPhone(o) {
        let reg = /^[1][0-9]{10}$/;
        return reg.test(o);
    }
    static isIDCard(o) {
        return /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(o);
    }
    static isURL(o) {
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(o);
    }
    static isEnglish(o) {
        return /^[a-zA-Z]+$/.test(o);
    }
    static isChinese(o) {
        return /^[\u4E00-\u9FA5]+$/.test(o);
    }
    static isLower(o) {
        return /^[a-z]+$/.test(o);
    }
    static isUpper(o) {
        return /^[A-Z]+$/.test(o);
    }
    static isEmail(o) {
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(o);
    }
}
exports.Validate = Validate;
var Rules = {
    Name: [{
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
    Age: [{
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
//# sourceMappingURL=index.js.map