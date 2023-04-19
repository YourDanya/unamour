'use client'

import {memo} from 'react'
import useCheckBox from 'app/[locale]/_common/components/checkbox/checkbox.hook'
import {CheckboxProps} from 'app/[locale]/_common/components/checkbox/checkbox.types'
import {FC} from 'react'
import 'app/[locale]/_common/components/checkbox/checkbox.styles.sass'

const Checkbox: FC<CheckboxProps> = (props) => {
    const {label, className, value, onChange, name, styles, ...otherProps} = props
    const {focused, onFocus, handleClick} = useCheckBox()

    return (
        <div className={`checkbox ${className?? ''}`}>
            <div className={`checkbox__check ${focused ? 'checkbox__check--focused' : ''}
                    ${value ? 'checkbox__check--checked' : ''}`} style={styles}>
                <input
                    className={`checkbox__input`}
                    type={'checkbox'}
                    checked={value}
                    name={name}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onFocus}
                    onMouseDown={handleClick}
                    {...otherProps}
                />
            </div>
            <label className={'checkbox__label'} htmlFor={name} onClick={handleClick}>
                {label}
            </label>
        </div>
    )
}

const areEqual = (prevProps: CheckboxProps, currentProps: CheckboxProps) =>
    prevProps.value === currentProps.value

export default memo(Checkbox, areEqual)

// export default Checkbox