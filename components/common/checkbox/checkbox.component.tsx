import React from 'react'
import useCheckBox from 'components/common/checkbox/checkbox.hook'
import {ChangeEvent} from 'react'
import {FC} from 'react'

type CheckboxProps = {
    label: string,
    value: boolean,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    styles?: object,
    name?: string
}

const Checkbox: FC<CheckboxProps> = (props) => {

    const {label, className, value, onChange, name, styles, ...otherProps} = props
    const {focused, setFocused, handleClick} = useCheckBox()

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
                    onFocus={setFocused}
                    onBlur={setFocused}
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

export default React.memo(Checkbox, areEqual)