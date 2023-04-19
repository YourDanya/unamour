import React, {useState} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'

const useShopItemPreview = () => {
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

    return {hovered, onMouse}
}

export default useShopItemPreview