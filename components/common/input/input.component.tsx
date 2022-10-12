import React from 'react'
import useInput from 'components/common/input/input.hook'
import {DependencyList} from 'react'

export type InputProps = {
    placeholder: string
    name: string,
    value: string,
    className?: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: string | null,
    type?: string,
    handleValidate?: (name: string) => void,
    validateDeps?: DependencyList,
    children?: React.ReactNode
}

const Input: React.FC<InputProps> = (props) => {
    const {value, name, handleChange, placeholder, className, children, error, type} = props
    const {focused, handleFocus, handleBlur, autoComplete} = useInput(props)

    return (
        <div className={`input ${className ?? ''}`}>
            <div
                className={`input__state ${focused ? 'input__state--focused' : ''} ${value !== '' ? 'input__state--full' : ''}`}>
                <div className="input__main">
                    <input
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onChange={handleChange}
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