import {FocusEvent} from 'react'
import {useDebounceEffect} from 'app/[locale]/_common/hooks/component/component.hooks'
import {TextareaProps} from 'app/[locale]/_common/components/textarea/textarea.types'
import {useState} from 'react'

const useTextArea = (props: TextareaProps) => {
    const {onValidate, error, name, value, validateDeps} = props

    const [focused, setFocused] = useState(false)

    const onBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
        setFocused(!focused)
        onValidate && onValidate(name)
    }

    const onFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
        setFocused(!focused)
    }

    return {onFocus, onBlur, focused}
}

export default useTextArea