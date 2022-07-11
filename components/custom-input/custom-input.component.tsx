import React, {useRef, useState} from "react";
import {useToggle} from "../../hooks/hooks";

type RequireAllIfOne<TRequiredAlways, TRequiredIfOne> =
    (TRequiredAlways & TRequiredIfOne) | (Partial<Record<keyof TRequiredIfOne, never>> & TRequiredAlways)

type customInputProps = {
    placeholder: string
    name: string,
    value?: string,
    className?: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: string,
    grey?: boolean,
    onSubmit?: (param: string) => void,
    img?: React.ReactNode
}

const CustomInput: React.FC<customInputProps> = (props) => {
    const {img, value, onSubmit, handleChange, placeholder, className, ...otherProps} = props

    const [focused, handleFocus] = useToggle()

    return (
        <div className={`custom-input ${className}`}>
            <input
                onBlur={handleFocus}
                onFocus={handleFocus}
                {...otherProps}
                className={`custom-input__input`}
                value={value}
                onChange={handleChange}
            />
            <div className={`custom-input__placeholder ${value !== '' ? 'custom-input__placeholder--hidden' : ''}`}>
                {placeholder}
            </div>
            {img && (
                <div className={`custom-input__icon ${focused ? 'custom-input__icon--shown' : ''}`}>
                    {img}
                </div>
            )}
        </div>
    )
}

export default CustomInput