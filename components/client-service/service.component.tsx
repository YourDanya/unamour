import React, {ReactNode} from 'react'
import ServiceMenu from 'components/client-service/menu/menu.component'
import Button from 'components/common/button/button.component'
import useClientService from 'components/client-service/service.hook'
import ModalContent from 'components/common/modal-content/modal-content.component'
import Modal from 'components/common/modal/modal.component'
import {ClientServiceProps} from 'components/client-service/service.types'

const ClientService: React.FC<ClientServiceProps> = ({children}) => {

    const {modalState, hideModal, showModal, transl} = useClientService()

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

export const getClientServiceLayout = (page: ReactNode) => {
    return (
        <ClientService>
            {page}
        </ClientService>
    )
}

export default ClientService