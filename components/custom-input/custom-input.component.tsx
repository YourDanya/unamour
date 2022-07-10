import React, {useState} from "react";

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

    return (
        <div className= {`custom-input ${className}`}>
            <input
                {...otherProps}
                className={`custom-input__input`}
                value={value}
                onChange={handleChange}
            />
            <div className={`custom-input__placeholder ${value? 'custom-input__placeholder--hidden' : ''}`}>
                {placeholder}
            </div>
            {img}
        </div>
    )
}

export default CustomInput