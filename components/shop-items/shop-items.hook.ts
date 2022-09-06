import {ShopItemsProps} from "./shop-items.component"
import {useLocale} from "../../hooks/event-handler.hooks"
import shopItemsContent from "./shop-items.content"
import {useRouter} from "next/router"
import React, {useState} from "react"

const useShopItems = (props: ShopItemsProps) => {

    const [content, translation] = useLocale(shopItemsContent)
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

    return {content, translation, handleLinkClick, params, handleResetClick, filters, reset, setReset}
}

export default useShopItems