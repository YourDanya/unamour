import useNavRoute from 'components/nav/nav-route.hook'
import {useModal} from 'hooks/component/component.hooks'

const useNav = () => {
    const [modalState, showModal, hideModal, showTopModal, hideTopModal] =
        useModal({hamburger: false, search: false, shopping: false, sign: false, modal: false})
    const {home} = useNavRoute(hideModal)

    return {modalState, showModal, hideModal, home, showTopModal, hideTopModal}
}

export default useNav