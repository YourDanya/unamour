import React from "react"

export type FormProps = {
    error?: string,
    className?: string
}

const Form: React.FC<FormProps> = (props) => {

    const {children, error, className} = props

    return (
        <form className={`form ${className ?? ''}`}>
            {children}
            <div className={'form__error'}>{error}</div>
        </form>
    )
}

export default Form