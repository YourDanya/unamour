import {ClientItem} from "../../redux/shop-items/shop-items.types"
import {useToggle, useToggleMany} from "../../hooks/event-handler.hooks"

const useShopItemPreview = (props: ClientItem) => {
    const [hovered, handleMouse, setHovered] = useToggle()
    const [loaded, handleLoaded, setLoaded] = useToggleMany(['0', '1'], 'data-attr')
    return {hovered, handleMouse, setHovered, loaded, setLoaded, handleLoaded}
}

export default useShopItemPreview