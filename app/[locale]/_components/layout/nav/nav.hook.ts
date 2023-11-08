import useNavRoute from 'app/[locale]/_components/layout/nav/nav-route.hook'
import {MouseAction} from 'app/_common/types/types'
import useModalStore from 'app/_common/store/modal/modal.store'
import {ModalState} from 'app/_common/store/modal/modal.types'

const useNav = () => {
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