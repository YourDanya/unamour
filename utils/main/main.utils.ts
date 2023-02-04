import {MapField} from 'utils/main/main.types'
import {LocaleError} from 'redux/store.types'
import {MessLocaleError} from 'redux/store.types'
import {GetError} from 'utils/main/main.types'
import {NullObj} from 'utils/main/main.types'

// export const sleep= (ms: number) => {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// export const removeFromArr = (arr: any[], value: any) => {
//     const index = arr.indexOf(value)
//     if (index > -1) {
//         arr.splice(index, 1)
//     }
//     return arr
// }
//
// export const debounce = <T extends any [], > (callback: (...args: T) => void, delay = 1000) => {
//     let timeout: NodeJS.Timeout
//
//     return (...args: T) => {
//         clearTimeout(timeout)
//         timeout = setTimeout(() => callback(...args), delay)
//     }
// }
//
// export const capitalizeString: CapitalizeString = ((string: string) => {
//     return string.charAt(0).toUpperCase().concat(string.slice(1))
// }) as CapitalizeString

export const parseTimer = (milliseconds: number) => {
    let seconds = Math.floor(milliseconds / 1000)
    let minutes = Math.floor(seconds / 60)
    seconds = seconds % 60
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

export const mapField: MapField = (field, stateField, locale, contentErrors,
                                   contentSuccess) => {
    // const code = stateField?.error?.code as '4' | '5'
    // const message = stateField?.error?.message as string
    // let error: string | null = null
    // if (code === '5') {
    //     error = contentErrors['5'][locale]
    // } else if (code) {
    //     let fieldError = contentErrors['4'][field] as LocaleError | MessLocaleError
    //     if (fieldError.ua) {
    //         fieldError = fieldError as LocaleError
    //         error = fieldError?.[locale]
    //     } else if (message) {
    //         fieldError = fieldError as MessLocaleError
    //         error = fieldError[message]?.[locale]
    //     }
    // }
    const {loading, timer, error: serverError} = stateField
    const error = getError(field, serverError, contentErrors, locale)
    const success = stateField.success ? contentSuccess[field][locale] : null
    return {loading, error, success, timer}
}

export const getError: GetError = (field, serverError, contentErrors, locale) => {
    const code = serverError?.code as '4' | '5'
    const message = serverError?.message as string
    let error: string = ''
    if (code === '5') {
        error = contentErrors['5'][locale]
    } else if (code) {
        let fieldError = contentErrors['4'][field] as LocaleError | MessLocaleError
        if (fieldError.ua) {
            fieldError = fieldError as LocaleError
            error = fieldError?.[locale]
        } else if (message) {
            fieldError = fieldError as MessLocaleError
            error = fieldError[message]?.[locale]
        }
    }
    return error
}

export const nullObj: NullObj = (obj) => {
    const stack: any[] = [obj]
    while (stack.length !== 0) {
        let tempObj = stack.pop()
        for (let prop in tempObj) {
            if (typeof tempObj[prop] === 'string') {
                (tempObj[prop] as string) = ''
            }
            if (typeof tempObj[prop] === 'number') {
                (tempObj[prop] as number) = 0
            }
            if (typeof tempObj[prop] === 'boolean') {
                (tempObj[prop] as boolean) = false
            }
            if (typeof tempObj[prop] === 'object') {
                if (Array.isArray(tempObj[prop]) && typeof (tempObj[prop] as any[])[0] !== 'object') {
                    (tempObj[prop] as any[]) = []
                }
                if (Array.isArray(tempObj[prop]) && typeof (tempObj[prop] as any[])[0] === 'object') {
                    for (let i in tempObj[prop]) {
                        stack.push(tempObj[prop][i])
                    }
                }
                else {
                    stack.push(tempObj[prop])
                }
            }
        }    
    }
    return obj
}

export const checkEqual = (obj1: any, obj2: any) => {
    console.log('obj1', obj1)
    console.log('obj2', obj2)
    let stack1: any[] = [{obj: obj1}], newStack1, stack2: any[] = [{obj: obj2}], newStack2 = []
    while (stack1.length !== 0) {
        newStack1 = []
        newStack2 = []
        for (let i = 0; i < stack1.length; i++) {
            if (Object.keys(stack1[i]).length !== Object.keys(stack2[i]).length) {
                return false
            }
            for (let key in stack1[i]) {
                if (typeof stack1[i][key] === 'object' && typeof stack2[i][key] === 'object' &&
                    stack1[i][key] !== null && stack2[i][key] !== null) {
                    newStack1.push(stack1[i][key])
                    newStack2.push(stack2[i][key])
                }
                else if (typeof stack1[i][key] !== typeof stack2[i][key] || stack1[i][key] !== stack2[i][key]) {
                    console.log('obj1 !== obj2')
                    return false
                }
            }
        }
        stack1 = newStack1
        stack2 = newStack2
    }
    console.log('obj1 === obj2')
    return true
}