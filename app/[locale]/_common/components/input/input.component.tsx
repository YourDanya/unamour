'use client'

import {FC, memo} from 'react'
import {InputProps} from 'app/[locale]/_common/components/input/input.types'
import useInput from 'app/[locale]/_common/components/input/input.hook'
import 'app/[locale]/_common/components/input/input.styles.sass'

const Input: FC<InputProps> = (props) => {
    const {value, name, onChange, placeholder, className, error, type} = props
    const {focused, onFocus, onBlur, autoComplete} = useInput(props)

    return (
        <div className={`input ${className ?? ''}`}>
            <div
                className={`input__state ${focused ? 'input__state--focused' : ''} ${value !== '' ? 'input__state--full' : ''}`}>
                <div className={'input__main'}>
                    <input
                        onBlur={onBlur}
                        onFocus={onFocus}
                        onChange={onChange}
                        name={name}
                        className={`input__input`}
                        value={value}
                        type={type ?? 'text'}
                        autoComplete={autoComplete}
                    />
                    <label className="input__placeholder" htmlFor={name}>
                        {placeholder}
                    </label>
                </div>
            </div>
            {error && (
                <div className="input__error">
                    {error}
                </div>
            )}
        </div>
    )
}

const areEqual = (prevProps: InputProps, currentProps: InputProps) =>
    prevProps.value === currentProps.value && prevProps.error === currentProps.error &&
    prevProps.validateDeps === currentProps.validateDeps

export default memo(Input, areEqual)

// export default Input