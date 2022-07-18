import React, {useState} from "react";

type DropdownProps = {
    name: string,
    content?: React.ReactNode,
    plus?: boolean,
}

const Dropdown: React.FC<DropdownProps> = ({name, content, plus, children}) => {
    const [show, setShow] = useState(false)

    return (
        <div className={`dropdown`}>
            <div className={`dropdown__top ${plus? 'dropdown__top--plus' : '' }`} onClick={() => setShow(!show)}>
                {plus ? (
                    <></>
                ) : (
                    <div className={`dropdown__sign ${show ? 'dropdown__sign--show' : ''}`}>
                        <div className={'dropdown__sign-line dropdown__sign-line--first'}/>
                        <div className={'dropdown__sign-line dropdown__sign-line--last'}/>
                    </div>
                )}
                <div className={`dropdown__name`}>
                    {name}
                </div>
                {plus ? (
                    <div className={'dropdown__plus'}/>
                ) : (
                    <></>
                )}
            </div>
            <div className={`dropdown__content  ${show ? 'dropdown__content--show' : ''}`}>
                {content}
                {children}
            </div>
        </div>
    )
}

export default Dropdown