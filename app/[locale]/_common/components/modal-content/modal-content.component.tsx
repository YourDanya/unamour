'use client'

import {FC} from 'react'
import {ModalContentProps} from 'app/[locale]/_common/components/modal-content/modal-content.types'
import useModalContent from 'app/[locale]/_common/components/modal-content/modal-content.hook'
import 'app/[locale]/_common/components/modal-content/modal-content.styles.sass'

const ModalContent: FC<ModalContentProps> = (props) => {
    const {children, className, hideModal, active} = props

    const {onHideModal} = useModalContent(hideModal)

    return (
        <div className={`modal-content ${active? 'modal-content--active' : ''} ${className?? ''}`}>
            <button className='close modal-content__close' onClick={onHideModal}/>
            {children}
        </div>
    )
}

export default ModalContent