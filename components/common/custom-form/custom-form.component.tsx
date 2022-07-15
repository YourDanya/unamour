import React from "react"
import CustomInput from "../custom-input/custom-input.component"

type FormElement = {
    type: 'input' | 'check' | 'radio' | string,
    className: string,
    name: string,
    placeholder : string,
    value: string
}

type customFormProps = {
    elements: FormElement[],
    handleChange : () => void,
    values: any
}

const CustomForm: React.FC<customFormProps> = ({elements, handleChange, values}) => {
    const layout = elements.map(({type, className, name, placeholder}, index) => {
        if (type === 'input') {
            return (
                <div className={className} key={index}>
                        <CustomInput
                            placeholder={placeholder}
                            name={name}
                            handleChange={handleChange}
                            value={values[name]}
                        />
                </div>
            )
        }
        else if (type === 'check') {

        }
        else if (type === 'radio') {

        }
        else if (type === 'button') {

        }
        else {
            return (
                <div className={className} key={name}>
                    {placeholder}
                </div>
            )
        }
    })
    return (
        <form className={'form'}>
            {layout}
        </form>
    )
}

export default CustomForm