import React, {useRef, useState} from "react";
import {usePreventDefault, useToggle} from "../../../hooks/hooks";

type customCheckboxProps = {
    name: string,
    code?: string,
    handleClick?: () => {},
    className?: string,
}

const CustomCheckbox: React.FC<customCheckboxProps> = ({name, code, handleClick, className}) => {
    const [checked, setChecked] = useState(false)

    const handleNativeClick = () => {
        setChecked(!checked)
        if (handleClick) handleClick()
    }

    const ref = useRef<HTMLInputElement>(null)

    const handleChange = (event: React.ChangeEvent) => {
        setChecked(!checked)
    }

    const handleMouseDown = usePreventDefault()

    const [focused, setFocused] = useToggle()

    return (
        <div className={`checkbox ${className}`}>
            {code ? (
                <>
                    <input
                        className={`checkbox__input`}
                        type={'checkbox'}
                        checked={checked}
                        onChange={handleChange}
                        ref={ref}
                    />
                    <div className='checkbox__color-check' style={{backgroundColor: `${code}`}}/>
                </>
            ) : (
                <div className={`checkbox__check ${focused ? 'checkbox__check--focused' : ''}
                    ${checked? 'checkbox__check--checked' : ''}`}>
                    <input
                        className={`checkbox__input`}
                        type={'checkbox'}
                        id={name}
                        checked={checked}
                        ref={ref}
                        onChange={handleChange}
                        onFocus={setFocused}
                        onBlur={setFocused}
                        onMouseDown={handleMouseDown}
                    />
                </div>
            )}
            <label className={'checkbox__label'}
                   htmlFor={name}
                   onClick={(e) => e.preventDefault()}>
                {name}
            </label>
        </div>
    )
}

export default CustomCheckbox