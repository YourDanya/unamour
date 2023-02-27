import React, {useState} from 'react'
import {ClientItem} from 'redux/shop-items/shop-items.types'
import {useToggleMany} from 'hooks/event-handler/event-handler.hooks'
import {CategoryItem} from 'redux/shop-items/shop-items.types'
import {MouseAction} from 'types/types'
import {useLocale} from 'hooks/other/other.hooks'

const useShopItemPreview = (props: CategoryItem) => {
    const [transl] = useLocale(props)
    const [hovered, setHovered] = useState(false)
    // const [loaded, handleLoaded, _, loadRef] = useToggleMany({0: false, 1: false} , 'data-attr')
    //
    //
    const onMouse: MouseAction = () => {
        setHovered(!hovered)
    }
    //
    // const onClick: MouseAction = (event) => {
    //     const loaded = Object.values(loadRef.current).reduce((accum, current) => accum && current)
    //     if (!loaded) event.preventDefault()
    // }

    return {hovered, onMouse, transl}
}

export default useShopItemPreview