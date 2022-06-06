import React, {useState} from "react";

type customCheckboxProps = {
    text: string,
    code?: string,
    handleClick?: () => {}
}

const CustomCheckbox: React.FC<customCheckboxProps> = ({text, code, handleClick}) => {
    const [checked, setChecked] = useState(false)

    const handleNativeClick = () => {
        setChecked(!checked)
        if (handleClick) handleClick()
    }

    console.log('inside custom checkbox')

    return (
        <div className={'checkbox'} onClick={handleNativeClick}>
            {
                code ?
                    (
                        <>
                            <div className={`checkbox__color-check ${checked ? 'checkbox__color-check--active' : ''}`}
                                 style={{backgroundColor: `${code}`}}/>
                            <input className={`checkbox__input`}/>
                        </>
                    ) : (
                        <>
                            <input className={`checkbox__input `} id={text} type={'checkbox'} checked={checked}/>
                            <div className={`checkbox__check ${checked ? 'checkbox__check--active' : ''}`}/>
                        </>
                    )
            }
            <label className={'checkbox__label'} htmlFor={text}>
                {text}
            </label>
        </div>
    )
}

export default CustomCheckbox