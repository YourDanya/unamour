import React from "react";

type modalContentProps = {
    active : boolean,
    hideModal: () => void,
    className?: string
}

const ModalContent: React.FC<modalContentProps> = ({children, className, hideModal}) => {
    return (
        <div className={`modal-content ${className?? ''}`}>
            <button className='close modal-content__close' onClick={hideModal}/>
            {children}
        </div>
    )
}

export default ModalContent