import React from 'react'
import {useDebounceEffect} from 'hooks/component/component.hooks'
import {TextareaProps} from 'components/common/textarea/textare.types'
import {useToggle} from 'hooks/event-handler/event-handler.hooks'

const useTextArea = (props: TextareaProps) => {
    const {onValidate, error, name, value, validateDeps} = props

    const [focused, _onFocus] = useToggle()

    const onBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        _onFocus(event)
        onValidate && onValidate(name)
    }

    const onFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
        _onFocus(event)
    }

    useDebounceEffect(() => {
        if (onValidate && error) {
            onValidate(name)
        }
    }, [value, validateDeps])

    return {onFocus, onBlur, focused}
}

export default useTextArea