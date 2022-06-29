import React from 'react'

interface CrossProps {
    onClick: () => void
}

const Cross: React.FC<CrossProps> = () => {
    return (
        <div className="cross">
        </div>
    )
}

export default Cross