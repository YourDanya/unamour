'use client'

import {FC} from 'react'
import useDropdown from 'app/[locale]/_common/components/dropdown/dropdown.hook'
import {DropdownProps} from 'app/[locale]/_common/components/dropdown/dropdown.types'

const Dropdown: FC<DropdownProps> = (props) => {
    const {name, plus, children, className} = props
    const {show, onClick, elemRef} = useDropdown(props)

    return (
        <div className={`dropdown ${plus? 'dropdown--plus' : '' } ${show ? 'dropdown--show' : ''} ${className}`}>
            <button className={`dropdown__top ${plus? 'dropdown__top--plus' : '' }`} onClick={onClick}>
                <div className={'dropdown__sign'}/>
                <div className={'dropdown__name'}>{name}</div>
            </button>
            <div className={`dropdown__content  ${show ? 'dropdown__content--show' : ''}`} ref={elemRef}>
                <div className={'dropdown__children'}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Dropdown