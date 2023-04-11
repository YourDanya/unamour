import useNavRoute from 'components/nav/nav-route.hook'
import {useModal} from 'hooks/component/component.hooks'
import useModalStore from 'store/modal/modal.store'
import {MouseAction} from 'types/types'
import {ModalState} from 'store/modal/modal.types'

const useNav = () => {
    // const [modalState, showModal, hideModal, showTopModal, hideTopModal] =
    //     useModal({hamburger: false, search: false, shopping: false, sign: false, modal: false})

    const {modalState, showModal, hideModal, hideTopModal} = useModalStore()

    const {home} = useNavRoute(hideModal)

    const onHideTopModal: MouseAction = (event) => {
        const name = event.currentTarget.getAttribute('name') as keyof ModalState
        hideTopModal(name)
    }

    return {
        modalState, showModal, hideModal, home, onHideTopModal
    }
}

export default useNav