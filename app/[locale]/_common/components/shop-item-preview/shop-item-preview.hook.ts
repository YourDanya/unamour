import React, {useState} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useEffect} from 'react'
import {ShopItemPreviewProps} from 'app/[locale]/_common/components/shop-item-preview/shop-item-preview.types'

const useShopItemPreview = (props: ShopItemPreviewProps) => {
    const [hovered, setHovered] = useState(false)

    const onMouse: MouseAction = () => {
        setHovered(!hovered)
    }

    useEffect(() => {
        if (props.onMount) {
            props.onMount()
        }
    }, [])

    return {hovered, onMouse}
}

export default useShopItemPreview