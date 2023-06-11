import {InputProps} from 'app/[locale]/_common/components/input-v2/input.types'
import useInput from 'app/[locale]/_common/components/input-v2/input.hook'
import {memo} from 'react'
import {InputValues} from 'app/[locale]/_common/components/input-v2/input.types'

const Input = <T extends InputValues,> (props: InputProps<T>) => {
    const {name, error, placeholder, label, type, className, value} = props
    const {onChange, onFocus, focused} = useInput(props)

    return (
        <div className={`input-v2 input ${focused ? 'input--focused' : ''} ${value ? 'input--filled' : ''}
        ${type === 'textarea' ? 'input__state-textarea' : ''}  
        ${className}`}
        >
            {/*<div className={`input__state ${focused ? 'input__state--focused' : ''} */}
            {/*${type === 'textarea' ? 'input__state--textarea' : ''} ${value ? 'input__state--filled' : ''}`}*/}
            {/*>*/}
                {label && (
                    <label htmlFor={name} className={'input__label'}>
                        {label}
                    </label>
                )}
                <div className={'input__container'}>
                    <div className="input__placeholder-wrapper">
                        {type === 'textarea' ? (
                            <textarea
                                className="input__textarea"
                                name={name}
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onFocus}
                                value={value}
                            />
                        ) : (
                            <input
                                className="input__field"
                                name={name}
                                type={type ?? 'text'}
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onFocus}
                                value={value}
                            />
                        )}
                        {placeholder && (
                            <div className={'input__placeholder'}>
                                {placeholder}
                            </div>
                        )}
                    </div>
                </div>
                {error && (
                    <div className={'input__error'}/>
                )}
            {/*</div>*/}
        </div>
    )
}

export default memo(Input) as typeof Input