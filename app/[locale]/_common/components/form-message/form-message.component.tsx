'use client'

import {FC} from 'react'
import {FormMessageProps} from 'app/[locale]/_common/components/form-message/form-message.types'
import 'app/[locale]/_common/components/form-message/form-message.styles.sass'

const FormMessage: FC<FormMessageProps> = (props) => {
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