import React from 'react'

type spinnerProps = {
    className?: string
}

const Spinner: React.FC<spinnerProps> = ({className}) => {
    return (
        <div className={`spinner ${className?? ''}`}>
            <div className={'spinner__content'}/>
        </div>
    )
}

export default Spinner