import React from "react"

type ButtonProps = {
    className?: string
}

const Button: React.FC<ButtonProps> = ({className, children}) => {
    return (
        <button className={`button ${className ?? ''}`}>
            {children}
        </button>
    )
}

export default Button