import React from "react"

type hamburgerProps = {
    hamburger: boolean,
    showModal: (event: React.MouseEvent<HTMLElement>) => void,
    hideModal: (event: React.MouseEvent<HTMLElement>) => void
}

const Hamburger: React.FC<hamburgerProps> = ({hamburger, showModal, hideModal}) => {

    return (
        <div className={`container hamburger ${hamburger ? 'hamburger--active' : ''}`}>
            <button name={'hamburger'} className={`hamburger__button`} onClick={hamburger? hideModal : showModal}>
                <div className="hamburger__line"/>
                <div className="hamburger__line"/>
                <div className="hamburger__line"/>
            </button>
        </div>
    )
}

export default Hamburger