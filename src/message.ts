const message = {
    not_define: '%s not define type',
    type_error:'%s Type Error',
    string: '%s is not a string',
    number: '%s is not a number',
    array: '%s is not a array',
    required:'%s is required',
    string_min:'%s must be at least %n characters',
    string_max: '%s cannot be longer than %n characters',
    number_min: '%s cannot be less than %n',
    number_max: '%s cannot be greater than %n',
}

export enum FieldType {
    not_define = 'not_define',
    type_error = 'type_error',
    required = 'required',
    string = 'string',
    string_min = 'string_min',
    string_max = 'string_max',
    number = 'number',
    number_min = 'number_min',
    number_max = 'number_max',
    array = 'array',
}

/**
 * 
 * @param type 
 * @param key 
 */
export function replace(type: FieldType, key: string,value?:any) {
    let str = message[type].replace(/%s/, key)
    if(value) str = str.replace(/%n/,value)
    return str
}

export default message