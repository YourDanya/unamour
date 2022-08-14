import React from "react"
import {usePreventDefault, useToggle} from "../../../hooks/event-handler.hooks"

type CheckboxProps = {
    label: string,
    value: boolean,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    styles?: object,
    name?: string
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const {label, className, value, handleChange, name, styles} = props
    const handlePreventDefault = usePreventDefault()
    const [focused, setFocused] = useToggle()
    
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
                    onMouseDown={handlePreventDefault}
                />
            </div>
            <label
                className={'checkbox__label'}
                htmlFor={name}
                onClick={handlePreventDefault}
            >
                {label}
            </label>
        </div>
    )
}

export default Checkbox