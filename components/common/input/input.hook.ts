import {InputProps} from 'components/common/input/input.component'
import {useDebounceEffect} from 'hooks/component/component.hooks'
import {useToggle} from 'hooks/event-handler/event-handler.hooks'
import React from 'react'
import {useMemo} from 'react'

const useInput = (props: InputProps) => {
    const {handleValidate, error, name, value} = props

    const [focused, _handleFocus] = useToggle()

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
       _handleFocus(event)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        _handleFocus(event)
        handleValidate && handleValidate(name)
    }

    useDebounceEffect(() => {
        if (handleValidate && error) {
            handleValidate(name)
        }
    }, [value])

    const autoComplete = useMemo(() => {
        const value = name.toLowerCase()
        if (value.includes('email')) return 'email'
        if (value.includes('name')) return 'name'
        else return 'on'
    }, [])

    return {focused, handleFocus, handleBlur, autoComplete}
}

export default useInput