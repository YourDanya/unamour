import React from 'react'
import useCheckBox from 'components/common/checkbox/checkbox.hook'

type CheckboxProps = {
    label: string,
    value: boolean,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    styles?: object,
    name?: string
}

const Checkbox: React.FC<CheckboxProps> = (props) => {

    const {label, className, value, handleChange, name, styles, ...otherProps} = props
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
                    onChange={handleChange}
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