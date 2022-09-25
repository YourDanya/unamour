import {useToggleActive} from "../../hooks/event-handler.hooks"
import {useModal} from "../../hooks/component.hooks"

export const useShopItem = () => {

    const [activeSize, handleSizeClick] = useToggleActive()
    
    const [modalState, showModal, hideModal] = useModal({ size: false, present: false})

    return {activeSize, handleSizeClick,  modalState, showModal, hideModal}
}