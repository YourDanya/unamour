import React from 'react'

type FormMessageProps = {
    success: string | null,
    error: string | null,
    className?: string
}

const FormMessage: React.FC<FormMessageProps> = (props) => {
    const {success, error, className} = props

    return (
        <div className={`form-message ${className ?? ''}`}>
            {success && (
                <div className={`form-message__success`}>
                    {success}
                </div>
            )}
            {error && (
                <div className={`form-message__error`}>
                    {error}
                </div>
            )}
        </div>
    )
}

export default FormMessage