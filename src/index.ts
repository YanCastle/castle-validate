//单独验证
export function validate_rule(value:any,options:any){
    
    throw new Error(options.message);
}

export function validate(obj:Object,options:{[index:string]:any}){
    // 验证对象或...
    if('object'==typeof obj){
        let keys = Object.keys(obj)
        for(let i = 0;i<keys.length;i++){
            validate_rule(obj[keys[i]],options[keys[i]]);
        }
    }else{

    }
}