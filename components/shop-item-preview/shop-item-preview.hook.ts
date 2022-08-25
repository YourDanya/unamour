import {ClientItem} from "../../redux/shop-items/shop-items.types"
import {useToggle, useToggleMany} from "../../hooks/event-handler.hooks"
import React from "react"

const useShopItemPreview = (props: ClientItem) => {

    const [hovered, handleMouse, setHovered] = useToggle()
    const [loaded, handleLoaded, _, loadRef] = useToggleMany(['0', '1'] as const, 'data-attr')

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const loaded = Object.values(loadRef).reduce((accum, current) => accum && current)
        !loaded && event.preventDefault()
    }

    return {hovered, handleMouse, setHovered, loaded, handleLoaded, handleClick}
}

export default useShopItemPreview