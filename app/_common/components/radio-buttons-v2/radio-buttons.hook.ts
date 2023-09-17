import {Children} from 'react'
import {RadioButtonProps} from 'app/_common/components/radio-buttons-v2/radio-buttons.types'
import {ChangeValue} from 'app/_common/components/input-v2/input.types'

const useRadioButtons = <N extends string, V extends string | number> (props: RadioButtonProps<N, V>) => {
    const children = Children.toArray(props.children)

    const onChange = (event: {currentTarget: {value: string, name: string}}) => {
        let {value, name}: {value: string | number, name: string} = event.currentTarget
        props.onChange({value, name} as ChangeValue<Record<N, V>>)
    }

    return {children, onChange}
}

export default useRadioButtons