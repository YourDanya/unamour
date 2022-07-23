import {ShopItemsProps} from "./shop-items.component"
import {useInput, useLocale, useToggleActive, useToggleMany} from "../../hooks/hooks"
import {ShopItemsContent} from "./shop-items.content"

const useShopItems = (props: ShopItemsProps) => {
    const [content, translation] = useLocale(ShopItemsContent)
    const [sizes, handleSizeChange] = useToggleMany(content.sizes)
    const [colors, handleColorChange] = useToggleMany(content.colors.map(({slug, code}) => slug))
    const [sort, handleSortClick] = useToggleActive()
    const [price, handlePriceChange] = useInput({num1: translation.price.num1, num2: translation.price.num2,})
    
    return {
        ...props, content, translation, sizes,  handleSizeChange, colors, handleColorChange, sort, handleSortClick, price, handlePriceChange
    }
}

export default useShopItems