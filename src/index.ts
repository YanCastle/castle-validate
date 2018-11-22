import {
    findIndex
} from 'lodash'

export class Validate {
    Rules: Object
    constructor(Rules: Object) {
        this.Rules = Rules
    }

    static isString(o: any) { //是否字符串
        return Object.prototype.toString.call(o).slice(8, -1) === 'String'
    }

    static isNumber(o: any) { //是否数字
        return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
    }

    static isInteger(o: any) { //是否整数
        return Number.isInteger(o)
    }

    static isObj(o) { //是否对象
        return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
    }

    static isArray(o: any) { //是否数组
        return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
    }

    static isDate(o: any) { //是否时间
        return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
    }

    static isBoolean(o: any) { //是否boolean
        return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
    }

    static isFunction(o: any) { //是否函数
        return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
    }

    static isNull(o: any) { //是否为null
        return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
    }

    static isUndefined(o: any) { //是否undefined
        return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
    }

    static isFalse(o: any) {
        if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN) return true
        return false
    }

    static isTrue(o: any) {
        return !this.isTrue(o)
    }

    static isPC() { //是否为PC端
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"
        ]
        let flag = true
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false
                break
            }
        }
        return flag
    }

    static mobile_terminal() { //判断移动终端
        let u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
            return "Android"
        } else if (u.indexOf('iPhone') > -1) { //苹果手机
            return "iPhone"
        } else if (u.indexOf('iPad') > -1) { //iPad
            return "iPad"
        } else if (u.indexOf('Windows Phone') > -1) { //winphone手机
            return "Windows Phone"
        } else {
            return false
        }
    }

    static isPhone(o: any) { //是否手机号
        let reg = /^[1][0-9]{10}$/
        return reg.test(o)
    }

    static isIDCard(o: any) { //是否身份证
        return /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(o);
    }

    static isURL(o: any) { //是否网址
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(o)
    }

    static isEnglish(o: any) { //是否英文
        return /^[a-zA-Z]+$/.test(o);
    }

    static isChinese(o: any) { //是否中文
        return /^[\u4E00-\u9FA5]+$/.test(o);
    }

    static isLower(o: any) { //是否小写
        return /^[a-z]+$/.test(o);
    }

    static isUpper(o: any) { //是否大写
        return /^[A-Z]+$/.test(o);
    }

    static isEmail(o: any) { //是否邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(o);
    }

    

    // validate(obj: Object) {
    //     if ('object' == typeof obj) {
    //         let keys = Object.keys(obj)
    //         for (let i = 0; i < keys.length; i++) {
    //             if (keys[i] && this.Rules[keys[i]]) {
    //                 this.validate_rule(obj[keys[i]], this.Rules[keys[i]], keys[i])
    //             }
    //         }
    //     } else {

    //     }
    // }

    //  /**
    //  * 
    //  * @param rules 
    //  * @param type 
    //  */
    // private findType(rules,type:string){
    //     return rules[findIndex(rules, type)]
    // }

    // /**
    //  * 单独验证
    //  * @param value 
    //  * @param rules 
    //  * @param field 
    //  */
    // private validate_rule(value: any, rules: any, field: string) {
    //     let parameter = {value:value,field:field}
    //     //判断类型是否正确
    //     if (findIndex(rules, 'type')>-1) this.validate_type(parameter,this.findType(rules,'type'))
    //     //是否存在required
    //     if(findIndex(rules,'required')>-1) this.validate_required(parameter,this.findType(rules,'required'))
    //     //是否存在min
    //     if(findIndex(rules,'min')>-1) this.validate_min(parameter,this.findType(rules,'min'))
    // }

    // /**
    //  * 验证数据类型
    //  * @param param
    //  * @param rules 
    //  */
    // private validate_type({value,field},rules) {
    //     if (rules.type != typeof value) throw new Error(rules.message || `${field} is not a ${rules.type}`)
    // }

    // /**
    //  * 验证是否必填
    //  * @param param
    //  * @param rules 
    //  */
    // private validate_required({value,field},rules){
    //     if(this.isString(value) && ""==value.trim()) throw new Error(rules.message || `${field} is required`)
    // }

    // /**
    //  * 
    //  * @param param
    //  * @param rules 
    //  */
    // private validate_min({value,field},rules){
    //     if(this.isString(value)){
    //         if(value.length<rules.min) throw new Error(rules.message || `${field} must be at least ${rules.min} characters`)
    //     }
    //     if(this.isNumber(value)){
    //         if(value<rules.min) throw new Error(rules.message || `${field} cannot be less than ${rules.min}`)
    //     }
    // }

    // /**
    //  * 是否字符串
    //  * @param field 
    //  */
    // public isString(field:any){
    //     return "string" == typeof field
    // }

    // /**
    //  * 是否数字
    //  * @param field 
    //  */
    // public isNumber(field:any){
    //     return "number" == typeof field
    // }
}

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
}

const EditData = {
    Name: "张三",
    Age: 18
}

// const v = new Validate(Rules)
// v.validate(EditData)