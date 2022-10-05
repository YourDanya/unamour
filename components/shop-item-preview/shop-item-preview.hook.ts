import React, {useState} from 'react'
import {ClientItem} from 'redux/shop-items/shop-items.types'
import {useToggleMany} from 'hooks/event-handler/event-handler.hooks'

const useShopItemPreview = (props: ClientItem) => {

    const [hovered, setHovered] = useState(false)

    const [loaded, handleLoaded, _, loadRef] = useToggleMany(['0', '1'] as const, 'data-attr')

    const handleMouse = (event: React.MouseEvent<HTMLElement>) => {
        const loaded = Object.values(loadRef.current).reduce((accum, current) => accum && current)
        if (loaded) setHovered(!hovered)
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const loaded = Object.values(loadRef.current).reduce((accum, current) => accum && current)
        if (!loaded) event.preventDefault()
    }


    return {hovered, handleMouse, setHovered, loaded, handleLoaded, handleClick}
}

export default useShopItemPreview