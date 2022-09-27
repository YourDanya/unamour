import React from 'react'

type RadioButtonProps = {
    inputs: {value: string, label: string, node?: React.ReactNode }[]
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    active: string,
    name: string,
    className?: string
}

const RadioButtons: React.FC<RadioButtonProps> = (props) => {

    const {inputs, handleChange, active, name, className} = props

    return (
        <div className={`radio-group ${className ?? ''}`}>
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

export default RadioButtons