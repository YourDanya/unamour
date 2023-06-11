
import {useState} from 'react'
import {InputProps} from 'app/[locale]/_common/components/input-v2/input.types'
import {InputEvent} from 'app/[locale]/_common/components/input-v2/input.types'
import {InputValues} from 'app/[locale]/_common/components/input-v2/input.types'
import {ChangeValue} from 'app/[locale]/_common/components/input-v2/input.types'

const useInput =<T extends InputValues> (props: InputProps<T>) => {

    const onChange = (event: InputEvent) => {
        let {value, name}: {value: string | number, name: string} = event.target
        if (typeof props.value === 'number') {
            value = +value
        }
        props.onChange({value, name} as ChangeValue<T>)
    }

    const [focused, setFocused] = useState(false)

    const onFocus = () => {
        setFocused(!focused)
    }

    return {onChange, focused, onFocus}
}

export default useInput