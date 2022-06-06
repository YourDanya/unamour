import React, {useState} from "react";

type customDropdownProps = {
    name: string,
    content: React.ReactNode
}

const CustomDropdown: React.FC<customDropdownProps> = ({name, content }) => {
    const [show, setShow] = useState(false)

    console.log(show)

    return (
        <div className='dropdown'>
            <div className='dropdown__top' onClick={() => setShow(!show)}>
                <div className={`dropdown__sign ${show? 'dropdown__sign--show' : ''  }`}>
                    <div className={'dropdown__sign-line dropdown__sign-line--first'}/>
                    <div className={'dropdown__sign-line dropdown__sign-line--last'}/>
                </div>
                <div className={`dropdown__name`}>
                    {name}
                </div>
            </div>
                <div className={`dropdown__content ${show? 'dropdown__content--show' : ''}`}>
                    {
                        content
                    }
                </div>
        </div>
    )
}

export default CustomDropdown