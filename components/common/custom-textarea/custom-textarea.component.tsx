import React from "react";

type customTextareaProps = {
    placeholder: string
    onTopChange?: (event: React.ChangeEvent<HTMLElement>) => void
    name: string
    error?: string
}

const CustomTextarea: React.FC<customTextareaProps> = ({name, placeholder, onTopChange, error}) => {
    return (
        <textarea
            className={'custom-textarea'}
            name={name}
            onChange={onTopChange}
            placeholder={placeholder}>
        </textarea>
    )
}

export default CustomTextarea