import {ShopItemsProps} from "./shop-items.component"
import {useInput, useLocale, useToggleActive, useToggleMany} from "../../hooks/hooks"
import {ShopItemsContent} from "./shop-items.content"

const useShopItems = (props: ShopItemsProps) => {
    const content = useLocale(ShopItemsContent)
    const {translation} = content

    const [sizes, handleSizeClick] = useToggleMany(content.sizes)
    const [colors, handleColorClick] = useToggleMany(content.colors.map(({slug, code}) => slug))
    const [sort, handleSortClick] = useToggleActive()
    const [price, handlePriceChange] = useInput({num1: translation.price.num1, num2: translation.price.num2,})

    return {
        ...props, sizes, handleSizeClick, colors, handleColorClick, sort, handleSortClick, price, handlePriceChange
    }
}

export default useShopItems