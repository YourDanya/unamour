import {MouseEvent, FC, memo} from 'react'
import {MouseAction} from 'types/types'

export type ModalProps = {
    active: boolean,
    hideModal?: MouseAction
}

const Modal: FC<ModalProps> = ({active, hideModal}) => {

    return (
        <div className={`modal ${active? 'modal--active' : ''}`} onClick={hideModal}/>
    )
}

const areEqual = (prevProps: ModalProps, currentProps: ModalProps) => prevProps.active===currentProps.active

export default memo(Modal, areEqual)