import React from 'react'
import useInput from 'components/common/input/input.hook'
import {InputProps} from 'components/common/input/input.types'

const Input: React.FC<InputProps> = (props) => {
    const {value, name, onChange, placeholder, className, children, error, type} = props
    const {focused, handleFocus, handleBlur, autoComplete} = useInput(props)

    return (
        <div className={`input ${className ?? ''}`}>
            <div
                className={`input__state ${focused ? 'input__state--focused' : ''} ${value !== '' ? 'input__state--full' : ''}`}>
                <div className="input__main">
                    <input
                        onBlur={handleBlur}
                        onFocus={handleFocus}
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
                {children && (<div className="input__children">{children}</div>)}
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

export default React.memo(Input, areEqual)