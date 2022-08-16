import {ShopItemsProps} from "./shop-items.component"
import { useLocale, useToggleActive, useToggleMany} from "../../hooks/event-handler.hooks"
import {usePlainInput} from "../../hooks/input.hooks"
import shopItemsContent from "./shop-items.content"

const useShopItems = (props: ShopItemsProps) => {

    const [content, translation] = useLocale(shopItemsContent)
    const [sizes, handleSizeChange] = useToggleMany(content.sizes)
    const [colors, handleColorChange] = useToggleMany(content.colors.map(({slug, code}) => slug))
    const [sort, handleSortClick] = useToggleActive()
    const [price, handlePriceChange, setPriceValues] = usePlainInput({num1: translation.price.num1, num2: translation.price.num2,})
    
    return {
        ...props, content, translation, sizes,  handleSizeChange, colors, handleColorChange, sort, handleSortClick,
        price, handlePriceChange, setPriceValues
    }
}

export default useShopItems