import React from "react"
import Input from "../input/input.component"

type FormElement = {
    type: 'input' | 'check' | 'radio' | string,
    className: string,
    name: string,
    placeholder : string,
    value: string
}

type FormProps = {
    elements: FormElement[],
    handleChange : () => void,
    values: any
}

const Form: React.FC<FormProps> = ({elements, handleChange, values}) => {
    const layout = elements.map(({type, className, name, placeholder}, index) => {
        if (type === 'input') {
            return (
                <div className={className} key={index}>
                        <Input
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

export default Form