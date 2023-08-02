import {NullObj} from 'app/[locale]/_common/utils/helpers/null-obj/null-obj.types'

const nullObj: NullObj = (obj) => {
    obj = JSON.parse(JSON.stringify(obj))
    const stack: any[] = [obj]
    while (stack.length !== 0) {
        let tempObj = stack.pop()
        for (let prop in tempObj) {
            if (prop === '_id') {
                delete tempObj[prop]
            }
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
                } else {
                    stack.push(tempObj[prop])
                }
            }
        }
    }
    return obj
}

export default nullObj