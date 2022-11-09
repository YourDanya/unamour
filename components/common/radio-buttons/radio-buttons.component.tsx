import {FC} from 'react'
import {RadioButtonProps} from 'components/common/radio-buttons/radio-buttons.types'
import {Children} from 'react'

const RadioButtons: FC<RadioButtonProps> = (props) => {
    const {values, onChange, active, name, className, labels, children} = props

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
                            onChange={onChange}
                            checked={active === value}
                        />
                    </div>
                    <label className="radio-group__label" htmlFor={value}>
                        {labels[index]}
                    </label>
                    <div className="radio-group__node">
                        {Children.toArray(children)[index]}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RadioButtons