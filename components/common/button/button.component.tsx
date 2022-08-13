import React from "react"

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void,
    className?: string
    name?: string
}

const Button: React.FC<ButtonProps> = (props) => {

    const {className, children, onClick, name} = props

    return (
        <button className={`button ${className ?? ''}`} onClick={onClick} name={name?? ''}>
            {children}
        </button>
    )
}

export default Button