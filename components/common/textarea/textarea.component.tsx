import React from 'react'
import {TextareaProps} from 'components/common/textarea/textare.types'

const Textarea: React.FC<TextareaProps> = (props) => {
    const {name, placeholder, onChange, error, className, value} = props

    return (
        <div className={`textarea ${className ?? ''}`}>
            <textarea
                className={'textarea__input'}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
            <div className={'textarea__error'}>
                {error}
            </div>
        </div>
    )
}

export default Textarea