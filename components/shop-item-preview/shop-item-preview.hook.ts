import {ClientItem} from "../../redux/shop-items/shop-items.types"
import {useToggle} from "../../hooks/event-handler.hooks"

const useShopItemPreview = (props: ClientItem) => {
    const [hovered, handleMouse] = useToggle()
    return {...props, hovered, handleMouse}
}

export default useShopItemPreview