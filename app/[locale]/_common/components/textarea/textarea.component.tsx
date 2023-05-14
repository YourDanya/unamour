'use client'

import {FC} from 'react'
import useTextArea from 'app/[locale]/_common/components/textarea/textares.hook'
import {TextareaProps} from 'app/[locale]/_common/components/textarea/textarea.types'
import {memo} from 'react'

const Textarea: FC<TextareaProps> = (props) => {
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

// export default Textarea

export const areEqual = (prevProps: TextareaProps, nextProps: TextareaProps) =>
    prevProps.value === nextProps.value && prevProps.error === nextProps.error

export default memo(Textarea, areEqual)
