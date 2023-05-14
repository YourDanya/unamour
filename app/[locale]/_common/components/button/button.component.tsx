'use client'

import {FC} from 'react'
import useButton from 'app/[locale]/_common/components/button/button.hook'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import {ButtonProps} from 'app/[locale]/_common/components/button/button.types'

const Button: FC<ButtonProps> = (props) => {
    const {className, children, name, loading, onClick: _, ...other} = props
    const {onClick} = useButton(props)

    return (
        <button className={`button ${className ?? ''}`} onClick={onClick} name={name?? ''} {...other}>
            {loading? <Spinner/> : children}
        </button>
    )
}

export default Button