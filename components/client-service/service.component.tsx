import React, {ReactNode} from "react"
import useClientService from "./service.hook"
import ModalContent from "../common/modal-content/modal-content.component"
import ServiceMenu from "./menu/menu.component"
import Button from "../common/button/button.component"
import Modal from "../common/modal/modal.component";

type clientServiceProps = {}

const ClientService: React.FC<clientServiceProps> = ({children}) => {

    const {modalState, hideModal, showModal} = useClientService()

    return (
        <div className={'container service'}>
            <ServiceMenu className={'service__menu--desc'}/>
            <Button className={'service__button'} name={'menu'} onClick={showModal}>
                Клієнт меню
            </Button>
            <div className="service__page">{children}</div>
            <ModalContent className={'service__modal'} hideModal={hideModal} active={modalState.menu} hideOnRouteChange>
                <div className={'service__logo'}>UNAMOUR</div>
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