import React, {useState} from "react";

type RequireAllIfOne<TRequiredAlways, TRequiredIfOne> =
    (TRequiredAlways & TRequiredIfOne) | (Partial<Record<keyof TRequiredIfOne, never>> & TRequiredAlways)

type customInputProps = {
    placeholder: string
    name: string
    classes?: string[]
    onTopChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: string,
    grey?: boolean,
    src?: string
    onSubmit?: (param: string) => void
}

const CustomInput: React.FC<customInputProps> = (
    {src, onSubmit, onTopChange, placeholder, classes, ...otherProps}) => {

    const [input, setInput] = useState('')

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
            <div className="custom-input__placeholder">
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