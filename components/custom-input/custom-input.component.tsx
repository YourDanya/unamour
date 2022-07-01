import React, {useState} from "react";

type RequireAllIfOne<TRequiredAlways, TRequiredIfOne> =
    (TRequiredAlways & TRequiredIfOne) | (Partial<Record<keyof TRequiredIfOne, never>> & TRequiredAlways)

type customInputProps = {
    placeholder: string
    name: string,
    value?: string,
    classes?: string[]
    onTopChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: string,
    grey?: boolean,
    src?: string
    onSubmit?: (param: string) => void,
}

const CustomInput: React.FC<customInputProps> = (
    {src, value, onSubmit,
        onTopChange, placeholder, classes, ...otherProps}) => {

    const [input, setInput] = useState(value)

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
        onTopChange && onTopChange(event)
    }

    return (
        <div className= {`custom-input ${classes?.join(' ')}`}>
            <input
                {...otherProps}
                className={`custom-input__input`}
                value={input}
                onChange={handleChange}
            />
            <div className={`custom-input__placeholder ${input? 'custom-input__placeholder--hide' : ''}`}>
                {placeholder}
            </div>
            {
                src && input && onSubmit && (
                    <img
                        src={src}
                        className={'custom-input__icon'}
                        alt={'/custom-input'}
                        onClick={() => {
                            onSubmit(input)
                            setInput('')
                        }}
                    />
                )
            }
        </div>
    )
}

export default CustomInput