import React from 'react'
import {FormMessageProps} from 'components/common/form-message/form-message.types'

const FormMessage: React.FC<FormMessageProps> = (props) => {
    const {success, error, className, children} = props

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
            {children}
        </div>
    )
}

export default FormMessage