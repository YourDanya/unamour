import React from 'react'

interface CrossProps {
    onClick: () => void
}

const Cross: React.FC<CrossProps> = () => {
    return (
        <div className="cross">
            <span className="cross__item"/>
            <span className="cross__item"/>
        </div>
    )
}

export default Cross