'use client'

import {FC} from 'react'
import {ModalProps} from 'app/_common/components/modal/modal.types'
import {memo} from 'react'
import Button from 'app/_common/components/button/button.component'
import {useState} from 'react'
import {useEffect} from 'react'
import useModal from 'app/_common/components/modal/modal.hook'

const Modal: FC<ModalProps> = (props) => {
    const {active, hideModal} = props
    const {visible} = useModal(props)

    return (
        <div
            className={`modal ${active? 'modal--active' : ''} ${visible ? 'modal--visible' : ''}`}
            onClick={hideModal}
        />
    )
}

const areEqual = (prevProps: ModalProps, currentProps: ModalProps) => prevProps.active === currentProps.active

export default memo(Modal, areEqual)