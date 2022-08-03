import {ClientItem} from "../../redux/shop-items/shop-items.types"
import {useToggleActive} from "../../hooks/event-handler.hooks"
import {useModal} from "../../hooks/component.hooks"

export const useShopItem = (props: ClientItem) => {

    const [activeSize, handleSizeClick] = useToggleActive()
    
    const [modalState, showModal, hideModal] = useModal({ size: false, present: false})

    return {...props, activeSize, handleSizeClick,  modalState, showModal, hideModal}
}