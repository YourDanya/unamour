import React from 'react'
import useDropdown from 'components/common/dropdown/dropdown.hook'
import {DropdownProps} from 'components/common/dropdown/dropdown.types'

const Dropdown: React.FC<DropdownProps> = (props) => {
    const {name, plus, children, className} = props
    const {show, onClick} = useDropdown()

    return (
        <div className={`dropdown ${plus? 'dropdown--plus' : '' } ${show ? 'dropdown--show' : ''} ${className}`}>
            <button className={`dropdown__top ${plus? 'dropdown__top--plus' : '' }`} onClick={onClick}>
                <div className={'dropdown__sign'}/>
                <div className={'dropdown__name'}>{name}</div>
            </button>
            <div className={`dropdown__content  ${show ? 'dropdown__content--show' : ''}`}>
                <div className={'dropdown__children'}>{children}</div>
            </div>
        </div>
    )
}

export default Dropdown