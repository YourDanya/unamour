import {ChangeValue} from 'app/_common/components/input-v2/input.types'
import {ChangeEvent} from 'react'
import {InputValues} from 'app/_common/hooks/input/input-v2.types'
export const inputChange = <T extends InputValues> (event: ChangeEvent<HTMLInputElement>) => {
    let {value, name}: {value: string | number, name: string} = event.currentTarget
    if (typeof event.currentTarget.type === 'number') {
        value = +value
    }
    return {value, name} as ChangeValue<T>
}