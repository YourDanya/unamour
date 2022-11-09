import React, {useState} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import {useRouter} from 'next/router'
import shopItemsContent from 'components/shop-items/shop-items.content'
import {ShopItemsProps} from 'components/shop-items/shop-items.types'

const useShopItems = (props: ShopItemsProps) => {
    const [transl, content] = useLocale(shopItemsContent)
    const filters = Object.keys(content.filters)

    const router = useRouter()
    const path = router.asPath
    const pathArr = path.split('?')
    const mainPath = pathArr[0]
    const params = pathArr[1]

    const handleLinkClick = (event: any) => {
        const href = event.currentTarget.getAttribute('href')
        if (mainPath === href) event.preventDefault()
    }

    const [reset, setReset] = useState(false)

    const handleResetClick = (event: React.MouseEvent<HTMLElement>) => {
        if (path!==mainPath) {
            router.push(`${mainPath}?reset`, mainPath)
        }
    }

    return {content, transl, handleLinkClick, params, handleResetClick, filters, reset, setReset}
}

export default useShopItems