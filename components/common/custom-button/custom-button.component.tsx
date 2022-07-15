import React from "react";

type customButtonProps = {
    className?: string
    text?: string
}

const CustomButton: React.FC<customButtonProps> = ({className, text, children}) => {
    return (
        <button className={`custom-button ${className}`}>
            {text}
            {children}
        </button>
    )
}

export default CustomButton