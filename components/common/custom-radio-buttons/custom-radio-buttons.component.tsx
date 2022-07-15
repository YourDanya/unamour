import React from "react"


type customRadioButtonProps = {
    inputs: { value: string, label: string, node?: React.ReactNode }[]
    handleChange: (event: React.ChangeEvent) => void,
    active: string,
    name: string
}

const CustomRadioButtons: React.FC<customRadioButtonProps> = (props) => {

    const {inputs, handleChange, active, name} = props

    return (
        <div className='radio-group'>
            {inputs.map(({value, label, node}) => (
                    <div className='radio-group__elem' key={value}>
                        <div className={`radio-group__button ${active === value ? 'radio-group__button--active' : ''}`}>
                            <input
                                type='radio'
                                className='radio-group__input'
                                value={value}
                                name={name}
                                id={value}
                                onChange={handleChange}
                                checked={active === value}
                            />
                        </div>
                        <label className='radio-group__label' htmlFor={value}>
                            <div className='radio-group__about'>{label}</div>
                        </label>
                        <div className='radio-group__node'>{node}</div>
                    </div>
            ))}
        </div>
    )
}

export default CustomRadioButtons