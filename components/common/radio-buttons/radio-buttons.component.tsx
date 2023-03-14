import {FC} from 'react'
import {RadioButtonProps} from 'components/common/radio-buttons/radio-buttons.types'
import {Children} from 'react'
import useRadioButtons from 'components/common/radio-buttons/radio-buttons.hook'
import {CSSProperties} from 'react'

const RadioButtons: FC<RadioButtonProps> = (props) => {
    const {values, onChange, active, name, className, labels, styles, title, error} = props
    const {children} = useRadioButtons(props)

    return (
        <div className={`radio-group ${className ?? ''}`}>
            {title && (
                <div className={'radio-group__title'}>
                    {title}
                </div>
            )}
            {values.map((value, index) => (
                <div className="radio-group__elem" key={value}>
                    <div
                        className={`radio-group__button ${active === value ? 'radio-group__button--active' : ''}`}
                        style={styles && styles[index]}
                    >
                        <input
                            type="radio"
                            className="radio-group__input"
                            value={value}
                            name={name}
                            onChange={onChange}
                            checked={active === value}
                        />
                    </div>
                    <label className="radio-group__label" htmlFor={value}>
                        {labels[index]}
                    </label>
                    <div className="radio-group__node">
                        {children && children[index]}
                    </div>
                </div>
            ))}
            {error && (
                <div className={'radio-group__error'}>
                    {error}
                </div>
            )}
        </div>
    )
}

export default RadioButtons