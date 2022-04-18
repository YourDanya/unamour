import React from "react";

export interface modalProps {
    active: boolean,
    hideModal: (event: React.MouseEvent<HTMLElement>) => void
}

const Modal: React.FC<modalProps> = ({active, hideModal}) => {
    console.log(active)
    return (
        <div className={`modal ${active? 'modal--active' : ''}`} onClick={hideModal}/>
    )
}

export default Modal