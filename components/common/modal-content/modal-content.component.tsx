import React from "react";

type modalContentProps = {
    active : boolean,
    hideModal: (event: React.MouseEvent<HTMLButtonElement>) => void,
    className?: string,
}

const ModalContent: React.FC<modalContentProps> = (props) => {
    const {children, className, hideModal, active} = props

    return (
        <div className={`modal-content ${active? 'modal-content--active' : ''} ${className?? ''}`}>
            <button className='close modal-content__close' onClick={hideModal}/>
            {children}
        </div>
    )
}

export default ModalContent