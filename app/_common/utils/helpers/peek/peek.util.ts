import {PeekedObject} from 'app/_common/utils/helpers/peek/peek.types'
import {Peek} from 'app/_common/utils/helpers/peek/peek.types'

export const peek: Peek = (object, keys) => {
    return keys.reduce((newObject, key) => {
        newObject[key] = object[key]
        return newObject
    }, {} as PeekedObject<typeof object, typeof keys>)
}