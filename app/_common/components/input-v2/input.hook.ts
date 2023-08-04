
import {useState} from 'react'
import {InputProps} from 'app/_common/components/input-v2/input.types'
import {InputEvent} from 'app/_common/components/input-v2/input.types'
import {InputValues} from 'app/_common/components/input-v2/input.types'
import {ChangeValue} from 'app/_common/components/input-v2/input.types'
import {ChangeEvent} from 'react'

const useInput = <N extends string, V extends string | number> (props: InputProps<N, V>) => {

    const onChange = (event: {currentTarget: {value: string, name: string}}) => {
        let {value, name}: {value: string | number, name: string} = event.currentTarget
        if (typeof props.value === 'number') {
            value = +value
        }
        props.onChange({value, name} as ChangeValue<Record<N, V>>)
    }

    const [focused, setFocused] = useState(false)

    const onFocus = () => {
        setFocused(true)
        if (props.onFocus) {
            props.onFocus({name: props.name})
        }
    }

    const onBlur = () => {
        setFocused(false)
        if (props.onBlur) {
            props.onBlur({name: props.name})
        }
    }

    return {onChange, focused, onFocus, onBlur}
}

export default useInput