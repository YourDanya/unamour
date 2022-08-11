import React from "react"

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void,
    className?: string
}

const Button: React.FC<ButtonProps> = ({className, children, onClick}) => {

    return (
        <button className={`button ${className ?? ''}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button