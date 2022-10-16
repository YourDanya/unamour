import React from 'react'
import Spinner from 'components/common/spinner/spinner.component'
import {ButtonProps} from 'components/common/button/button.types'
import useButton from 'components/common/button/button.hook'

const Button: React.FC<ButtonProps> = (props) => {

    const {className, children, name, loading} = props
    const {handleClick} = useButton(props)

    return (
        <button className={`button ${className ?? ''}`} onClick={handleClick} name={name?? ''}>
            {loading? <Spinner/> : children}
        </button>
    )
}

export default Button