import {
    findIndex
} from 'lodash'

export class Validate {
    Rules: Object
    constructor(Rules: Object) {
        this.Rules = Rules
    }

    validate(obj: Object) {
        if ('object' == typeof obj) {
            let keys = Object.keys(obj)
            for (let i = 0; i < keys.length; i++) {
                if (keys[i] && this.Rules[keys[i]]) {
                    this.validate_rule(obj[keys[i]], this.Rules[keys[i]], keys[i])
                }
            }
        } else {

        }
    }

     /**
     * 
     * @param rules 
     * @param type 
     */
    private findType(rules,type:string){
        return rules[findIndex(rules, type)]
    }

    /**
     * 单独验证
     * @param value 
     * @param rules 
     * @param field 
     */
    private validate_rule(value: any, rules: any, field: string) {
        let parameter = {value:value,field:field}
        //判断类型是否正确
        if (findIndex(rules, 'type')>-1) this.validate_type(parameter,this.findType(rules,'type'))
        //是否存在required
        if(findIndex(rules,'required')>-1) this.validate_required(parameter,this.findType(rules,'required'))
        //是否存在min
        if(findIndex(rules,'min')>-1) this.validate_min(parameter,this.findType(rules,'min'))
    }

    /**
     * 验证数据类型
     * @param param
     * @param rules 
     */
    private validate_type({value,field},rules) {
        if (rules.type != typeof value) throw new Error(rules.message || `${field} is not a ${rules.type}`)
    }

    /**
     * 验证是否必填
     * @param param
     * @param rules 
     */
    private validate_required({value,field},rules){
        if(this.isString(value) && ""==value.trim()) throw new Error(rules.message || `${field} is required`)
    }

    /**
     * 
     * @param param
     * @param rules 
     */
    private validate_min({value,field},rules){
        if(this.isString(value)){
            if(value.length<rules.min) throw new Error(rules.message || `${field} must be at least ${rules.min} characters`)
        }
        if(this.isNumber(value)){
            if(value<rules.min) throw new Error(rules.message || `${field} cannot be less than ${rules.min}`)
        }
    }

    /**
     * 是否字符串
     * @param field 
     */
    public isString(field:any){
        return "string" == typeof field
    }

    /**
     * 是否数字
     * @param field 
     */
    public isNumber(field:any){
        return "number" == typeof field
    }
}

var Rules = {
    Name: [
        {
            type: "string",
            message: "姓名类型错误"
        },
        {
            required: true,
            message:"姓名必填"
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
            message:"年龄必填"
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

const v = new Validate(Rules)
v.validate(EditData)