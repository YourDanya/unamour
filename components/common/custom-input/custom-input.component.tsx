import React, {useRef, useState} from "react";
import {useToggle} from "../../../hooks/hooks";

type RequireAllIfOne<TRequiredAlways, TRequiredIfOne> =
    (TRequiredAlways & TRequiredIfOne) | (Partial<Record<keyof TRequiredIfOne, never>> & TRequiredAlways)

type customInputProps = {
    placeholder: string
    name: string,
    value?: string,
    className?: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: string,
    onSubmit?: (param: string) => void,
}

const CustomInput: React.FC<customInputProps> = (props) => {
    const {value, onSubmit, handleChange, placeholder, className, children, error, ...otherProps} = props

    const [focused, handleFocus] = useToggle()

    console.log(value)

    return (
        <div className={`input ${className}`}>
            <div className='input__main'>
                <input
                    onBlur={handleFocus}
                    onFocus={handleFocus}
                    {...otherProps}
                    className={`input__input`}
                    value={value}
                    onChange={handleChange}
                />
                <div className={`input__placeholder ${value !== '' ? 'input__placeholder--hidden' : ''}`}>
                    {placeholder}
                </div>
                {children && (
                    <div className={`input__node ${focused ? 'input__node--shown' : ''}`}>
                        {children}
                    </div>
                )}
            </div>
            {error && (
                <div className='input__error'>
                    {error}
                </div>
            )}
        </div>
    )
}

export default CustomInput