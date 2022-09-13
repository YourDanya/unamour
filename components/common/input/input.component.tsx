import React from "react"
import useInput from "./input.hook"

export type InputProps = {
    placeholder: string
    name: string,
    value?: string,
    className?: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: string,
    type?: string,
    handleValidate?: (event: React.FocusEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = (props) => {
    const {value, name, handleChange, placeholder, className, children, error, type} = props

    const {focused, handleFocus} = useInput(props)

    return (
        <div className={`input ${className ?? ''}`}>
            <div className={`input__state ${focused ? 'input__state--focused' : ''} ${value !== '' ? 'input__state--full' : ''}`}>
                <div className='input__main'>
                    <input
                        onBlur={handleFocus}
                        onFocus={handleFocus}
                        onChange={handleChange}
                        name={name}
                        className={`input__input`}
                        value={value}
                        type={type?? 'text'}
                    />
                    <div className='input__placeholder'>{placeholder}</div>
                </div>
                {error && (<div className='input__error'>{error}</div>)}
                {children && (<div className='input__children'>{children}</div>)}
            </div>
        </div>
    )
}

export default Input