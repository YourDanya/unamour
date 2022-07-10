import React, { useRef, useState} from "react";

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

    return (
        <div className={`checkbox ${className}`} onClick={handleNativeClick}>
            {
                code ?
                    (
                        <>
                            <input
                                className={`checkbox__input`}
                                id={name}
                                type={'checkbox'}
                                checked={checked}
                                onChange={() => {
                                }}
                                ref={ref}
                            />
                            <div className='checkbox__color-check' style={{backgroundColor: `${code}`}}/>
                        </>
                    ) : (
                        <>
                            <input
                                className={`checkbox__input`}
                                id={name}
                                type={'checkbox'}
                                checked={checked}
                                onChange={(e) => {
                                }}
                                ref={ref}
                            />
                            <div className="checkbox__check"/>
                        </>
                    )
            }
            <label className={'checkbox__label'}
                   htmlFor={name}
                   onClick={(e) => e.preventDefault()}>
                {name}
            </label>
        </div>
    )
}

export default CustomCheckbox