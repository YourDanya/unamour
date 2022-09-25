import React from "react"
import useInput from "./input.hook"

export type InputProps = {
    placeholder: string
    name: string,
    value?: string,
    className?: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: string | null,
    type?: string,
    handleValidate?: (name: string) => void
}

const Input: React.FC<InputProps> = (props) => {

    const {value, name, handleChange, placeholder, className, children, error, type} = props

    const {focused, handleFocus, handleBlur} = useInput(props)

    return (
        <div className={`input ${className ?? ''}`}>
            <div className={`input__state ${focused ? 'input__state--focused' : ''} ${value !== '' ? 'input__state--full' : ''}`}>
                <div className='input__main'>
                    <input
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onChange={handleChange}
                        name={name}
                        className={`input__input`}
                        value={value}
                        type={type?? 'text'}
                    />
                    <div className='input__placeholder'>{placeholder}</div>
                </div>
                {children && (<div className='input__children'>{children}</div>)}
            </div>
            <div className='input__error'>
                {error}
            </div>
        </div>
    )
}

export default Input