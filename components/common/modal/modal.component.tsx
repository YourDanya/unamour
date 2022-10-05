import React from 'react'

export type ModalProps = {
    active: boolean,
    hideModal: (event: React.MouseEvent<HTMLElement>) => void
}

const Modal: React.FC<ModalProps> = ({active, hideModal}) => {

    return (
        <div className={`modal ${active? 'modal--active' : ''}`} onClick={hideModal}/>
    )
}

const areEqual = (prevProps: ModalProps, currentProps: ModalProps) => prevProps.active===currentProps.active

export default React.memo(Modal, areEqual)