import React from "react"
import useModalContent from "./modal-content.hook";

type modalContentProps = {
    active : boolean,
    hideModal: () => void,
    className?: string,
    hideOnRouteChange?: boolean
}

const ModalContent: React.FC<modalContentProps> = (props) => {
    const {children, className, hideModal, active} = props

    useModalContent(hideModal)

    return (
        <div className={`modal-content ${active? 'modal-content--active' : ''} ${className?? ''}`}>
            <button className='close modal-content__close' onClick={hideModal}/>
            {children}
        </div>
    )
}

export default ModalContent