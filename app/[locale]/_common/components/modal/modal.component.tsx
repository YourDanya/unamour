'use client'

import {FC} from 'react'
import {ModalProps} from 'app/[locale]/_common/components/modal/modal.types'
import {memo} from 'react'

const Modal: FC<ModalProps> = ({active, hideModal}) => {

    return (
        <div className={`modal ${active? 'modal--active' : ''}`} onClick={hideModal}/>
    )
}

const areEqual = (prevProps: ModalProps, currentProps: ModalProps) => prevProps.active===currentProps.active

export default memo(Modal, areEqual)