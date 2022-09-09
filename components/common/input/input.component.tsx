import React from "react"
import {useToggle} from "../../../hooks/event-handler.hooks"

type InputProps = {
    placeholder: string
    name: string,
    value?: string,
    className?: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: string,
    type?: string
}

const Input: React.FC<InputProps> = (props) => {
    const {value, name, handleChange, placeholder, className, children, error, type} = props

    const [focused, handleFocus] = useToggle()

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