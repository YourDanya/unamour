import React from "react";

type TextareaProps = {
    placeholder: string
    onTopChange?: (event: React.ChangeEvent<HTMLElement>) => void
    name: string
    error?: string
}

const Textarea: React.FC<TextareaProps> = ({name, placeholder, onTopChange, error}) => {
    return (
        <textarea
            className={'custom-textarea'}
            name={name}
            onChange={onTopChange}
            placeholder={placeholder}>
        </textarea>
    )
}

export default Textarea