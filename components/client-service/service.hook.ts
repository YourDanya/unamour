import {useModal} from "../../hooks/component.hooks"

const useClientService = () => {

    const [modalState, showModal, hideModal] = useModal({menu: false})

    return {modalState, showModal, hideModal}
}

export default useClientService