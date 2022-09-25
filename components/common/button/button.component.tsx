import React from "react"
import Spinner from "../spinner/spinner.component";

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void,
    className?: string
    name?: string,
    loading?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {

    const {className, children, onClick, name, loading} = props

    return (
        <button className={`button ${className ?? ''}`} onClick={onClick} name={name?? ''}>
            {loading? <Spinner/> : children}
        </button>
    )
}

export default Button