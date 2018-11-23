export default class Validate {
    static isString(o: any): boolean;
    static isNumber(o: any): boolean;
    static isInteger(o: any): boolean;
    static isObj(o: any): boolean;
    static isArray(o: any): boolean;
    static isDate(o: any): boolean;
    static isBoolean(o: any): boolean;
    static isFunction(o: any): boolean;
    static isNull(o: any): boolean;
    static isUndefined(o: any): boolean;
    static isFalse(o: any): boolean;
    static isTrue(o: any): any;
    static isPC(): boolean;
    static mobile_terminal(): false | "Android" | "iPhone" | "Windows Phone" | "iPad";
    static isPhone(o: any): boolean;
    static isIDCard(o: any): boolean;
    static isURL(o: any): boolean;
    static isEnglish(o: any): boolean;
    static isChinese(o: any): boolean;
    static isLower(o: any): boolean;
    static isUpper(o: any): boolean;
    static isEmail(o: any): boolean;
    Rules: any;
    constructor(Rules: Object);
    validate(obj: Object): void;
    private validate_rule;
}
