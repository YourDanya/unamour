import React from "react";

type customButtonProps = {
    classes?: string[]
    text: string
}

const CustomButton: React.FC<customButtonProps> = ({classes, text}) => {
    return (
        <button className={`custom-button ${classes?.join(' ')}`}>
            {text}
        </button>
    )
}

export default CustomButton