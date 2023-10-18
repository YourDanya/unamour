import {ChangeValue} from 'app/_common/components/input-v2/input.types'
import {ChangeEvent} from 'react'
import {InputValues} from 'app/_common/hooks/input/input-v2.types'
export const inputChange = <T extends InputValues> (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    let {value, name, checked}: {value: string | number | boolean, name: string, checked?: boolean} = event.currentTarget

    if (event.currentTarget.type === 'number') {
        value = +value
    }
    if (event.currentTarget.type === 'checkbox') {
        value = checked as boolean
    }

    return {value, name} as ChangeValue<T>
}