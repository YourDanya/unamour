import {useDebounceEffect} from 'app/[locale]/_common/hooks/component/component.hooks'
import {FocusEvent} from 'react'
import {useMemo} from 'react'
import {useState} from 'react'
import {InputProps} from 'app/[locale]/_common/components/input/input.types'

const useInput = (props: InputProps) => {
    const {onValidate, error, name, value, validateDeps} = props

    const [focused, setFocused] = useState(false)

    const onFocus = (event: FocusEvent<HTMLInputElement>) => {
        setFocused(!focused)
        props.onFocus && props.onFocus()
    }

    const onBlur = (event: FocusEvent<HTMLInputElement>) => {
        setFocused(!focused)
        props.onBLur && props.onBLur()
        onValidate && onValidate(name)
    }

    useDebounceEffect(() => {
        if (onValidate && error) {
            onValidate(name)
        }
    }, [value, validateDeps])

    const autoComplete = useMemo(() => {
        const value = name.toLowerCase()
        if (value.includes('email')) {
            return 'email'
        }
        if (value.includes('surname')) {
            return 'family-name'
        }
        if (value.includes('name')) {
            return 'name'
        }
        else {
            return 'on'
        }
    }, [])

    return {focused, onFocus, onBlur, autoComplete}
}

export default useInput