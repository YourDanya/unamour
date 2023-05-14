import {NullObj} from 'app/[locale]/_common/utils/main/main.types'
import {FromEntriesWithReadOnly} from 'app/[locale]/_common/utils/main/main.types'
import {PeekedObject} from 'app/[locale]/_common/utils/main/main.types'
import {CreateDoubleLinkedList} from 'app/[locale]/_common/utils/main/main.types'
import {DoubleNode} from 'app/[locale]/_common/utils/main/main.types'
import {Peek} from 'app/[locale]/_common/utils/main/main.types'

export const parseTimer = (milliseconds: number) => {
    let seconds = Math.floor(milliseconds / 1000)
    let minutes = Math.floor(seconds / 60)
    seconds = seconds % 60
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

export const nullObj: NullObj = (obj) => {
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

export const checkEqual = (obj1: any, obj2: any) => {
    // console.log('obj1', obj1)
    // console.log('obj2', obj2)
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
                } else if (typeof stack1[i][key] !== typeof stack2[i][key] || stack1[i][key] !== stack2[i][key]) {
                    // console.log('obj1 !== obj2')
                    return false
                }
            }
        }
        stack1 = newStack1
        stack2 = newStack2
    }
    // console.log('obj1 === obj2')
    return true
}

export const createFromEntries = <ArrT extends ReadonlyArray<readonly[PropertyKey, any]>>(arr: ArrT) => {
    return Object.fromEntries(arr) as FromEntriesWithReadOnly<ArrT>
}

export const createDoubleLinkedList: CreateDoubleLinkedList = (arr) => {
    let list: DoubleNode<typeof arr[number]> = {} as DoubleNode<typeof arr[number]>
    let temp: DoubleNode<typeof arr[number]> = list

    arr.forEach((elem) => {
        temp.next = {value: elem, prev: temp}
        temp = temp.next
    })

    delete list?.next?.prev
    return list.next as DoubleNode<typeof arr[number]>
}

export const peek: Peek = (object, keys) => {
    return keys.reduce((newObject, key) => {
        newObject[key] = object[key]
        return newObject
    }, {} as PeekedObject<typeof object, typeof keys>)
}

export const getEntries = <ObjT extends object>(obj: ObjT) => {
    return Object.entries(obj) as { [KeyT in keyof ObjT]: [KeyT, ObjT[KeyT]] }[keyof ObjT][]
}

export const getValues = <ObjT extends object>(obj: ObjT) => {
    return Object.values(obj) as (ObjT[keyof ObjT])[]
}

export const getKeys = <ObjT extends object>(obj: ObjT) => {
    return Object.keys(obj) as (keyof ObjT) []
}