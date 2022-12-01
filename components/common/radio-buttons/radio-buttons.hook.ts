import {RadioButtonProps} from 'components/common/radio-buttons/radio-buttons.types'
import {Children} from 'react'

const useRadioButtons = (props: RadioButtonProps) => {
    const children = Children.toArray(props.children)
    return {children}
}

export default useRadioButtons