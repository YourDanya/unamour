import React from 'react'
import Spinner from 'components/common/spinner/spinner.component'
import {ButtonProps} from 'components/common/button/button.types'
import useButton from 'components/common/button/button.hook'

const Button: React.FC<ButtonProps> = (props) => {
    const {className, children, name, loading, onClick: _, ...other} = props
    const {onClick} = useButton(props)

    return (
        <button className={`button ${className ?? ''}`} onClick={onClick} name={name?? ''} {...other}>
            {loading? <Spinner/> : children}
        </button>
    )
}

export default Button