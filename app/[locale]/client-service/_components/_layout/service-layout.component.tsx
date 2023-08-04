'use client'

import useServiceLayout from 'app/[locale]/client-service/_components/_layout/service-layout.hook'
import ServiceMenu from 'app/[locale]/client-service/_components/_layout/menu/menu.component'
import Button from 'app/_common/components/button/button.component'
import ModalContent from 'app/_common/components/modal-content/modal-content.component'
import Modal from 'app/_common/components/modal/modal.component'
import {ReactNode} from 'react'

const ServiceLayout = (props: {children: ReactNode}) => {
    const {children} = props
    const {modalState, hideModal, showModal, transl} = useServiceLayout()

    return (
        <div className={'container service'}>
            <ServiceMenu className={'service__menu--desc'}/>
            <Button className={'service__button'} name={'menu'} onClick={showModal}>
                {transl.menu}
            </Button>
            <div className="service__page">{children}</div>
            <ModalContent className={'service__modal'} hideModal={hideModal} active={modalState.menu} hideOnRouteChange>
                <div className={'service__logo'}>{transl.logo}</div>
                <ServiceMenu/>
            </ModalContent>
            <Modal hideModal={hideModal} active={modalState.modal}/>
        </div>
    )
}

export default ServiceLayout