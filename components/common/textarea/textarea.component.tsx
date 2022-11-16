import React from 'react'
import {TextareaProps} from 'components/common/textarea/textare.types'
import useTextArea from 'components/common/textarea/textares.hook'

const Textarea: React.FC<TextareaProps> = (props) => {
    const {name, placeholder, onChange, error, className, value} = props
    const {onFocus, onBlur, focused} = useTextArea(props)

    return (
        <div className={`textarea ${className ?? ''}`}>
            <div className={`textarea__state ${focused ? 'textarea__state--focused' : ''} ${value !== '' ? 'textarea__state--full' : ''}`}>
                <div className={'textarea__main'}>
                    <textarea
                        className={'textarea__input'}
                        name={name}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        value={value}
                    />
                    <label className={'textarea__placeholder'}>
                        {placeholder}
                    </label>
                </div>
            </div>
            {error && (
                <div className={'textarea__error'}>
                    {error}
                </div>
            )}
        </div>
    )
}

export default Textarea