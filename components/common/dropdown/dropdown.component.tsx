import React from "react"
import {useToggle} from "../../../hooks/hooks";

type DropdownProps = {
    name: string,
    plus?: boolean,
    className?: string
}

const Dropdown: React.FC<DropdownProps> = ({name, plus, children, className}) => {
    const [show, handleClick] = useToggle()

    return (
        <div className={`dropdown ${plus? 'dropdown--plus' : '' } ${show ? 'dropdown--show' : ''} ${className}`}>
            <button className={`dropdown__top ${plus? 'dropdown__top--plus' : '' }`} onClick={handleClick}>
                <div className={'dropdown__sign'}/>
                <div className={`dropdown__name`}>{name}</div>
            </button>
            <div className={`dropdown__content  ${show ? 'dropdown__content--show' : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default Dropdown