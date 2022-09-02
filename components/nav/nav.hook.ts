import useNavRoute from "./nav-route.hook"
import {useModal} from "../../hooks/component.hooks"

const useNav = () => {
    const [modalState, showModal, hideModal] = useModal({hamburger: false, search: false, shopping: false, sign: false, modal: false})
    const {home} = useNavRoute(hideModal)
    return {modalState, showModal, hideModal, home}
}

export default useNav