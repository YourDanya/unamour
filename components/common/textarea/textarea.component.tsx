import React from 'react'

type TextareaProps = {
    className?: string,
    name: string,
    placeholder: string,
    handleChange: (event: React.ChangeEvent<HTMLElement>) => void,
    handleValidate?: (event: React.ChangeEvent<HTMLElement>) => void
    error?: string | null
}

const Textarea: React.FC<TextareaProps> = (props) => {

    const {name, placeholder, handleChange, error, className} = props

    return (
        <div className={`textarea ${className ?? ''}`}>
            <textarea
                className={'textarea__input'}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
            />
            <div className={'textarea__error'}>
                {error}
            </div>
        </div>
    )
}

export default Textarea