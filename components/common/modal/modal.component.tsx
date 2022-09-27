import React from 'react'

export type modalProps = {
    active: boolean,
    hideModal: (event: React.MouseEvent<HTMLElement>) => void
}

const Modal: React.FC<modalProps> = ({active, hideModal}) => {

    return (
        <div className={`modal ${active? 'modal--active' : ''}`} onClick={hideModal}/>
    )
}

const shouldUpdate = (prevProps: modalProps, currentProps: modalProps) => prevProps.active===currentProps.active

export default React.memo(Modal, shouldUpdate)