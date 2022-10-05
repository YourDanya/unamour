import React from 'react'

type RadioButtonProps = {
    labels: {label: string, node?: React.ReactNode }[],
    values: string[],
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    active: string,
    name: string,
    className?: string
}

const RadioButtons: React.FC<RadioButtonProps> = (props) => {

    const {values, handleChange, active, name, className, labels} = props

    return (
        <div className={`radio-group ${className ?? ''}`}>
            {values.map((value, index) => (
                <div className="radio-group__elem" key={value}>
                    <div className={`radio-group__button ${active === value ? 'radio-group__button--active' : ''}`}>
                        <input
                            type="radio"
                            className="radio-group__input"
                            value={value}
                            name={name}
                            id={value}
                            onChange={handleChange}
                            checked={active === value}
                        />
                    </div>
                    <label className="radio-group__label" htmlFor={value}>
                        {labels[index].label}
                    </label>
                    <div className="radio-group__node">
                        {labels[index].node}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RadioButtons