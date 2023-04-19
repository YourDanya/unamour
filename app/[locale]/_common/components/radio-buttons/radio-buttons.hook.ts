import {Children} from 'react'
import {RadioButtonProps} from 'app/[locale]/_common/components/radio-buttons/radio-buttons.types'

const useRadioButtons = (props: RadioButtonProps) => {
    const children = Children.toArray(props.children)
    return {children}
}

export default useRadioButtons