import {usePlainInput} from "../../../hooks/input.hooks"
import {priceFilterProps} from "./price-filter.component"

const usePriceFilter = (props: priceFilterProps) => {
    const {min, max} = props
    const [price, handlePriceChange, setPriceValues] = usePlainInput({min, max})
    return {price, handlePriceChange, setPriceValues}
}

export default usePriceFilter