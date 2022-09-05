import {PriceFilterProps} from "./price-filter.component"
import {useFilter} from "../filters.hooks"
import {ChangeEvent} from "react"
import {PriceState} from "../shop-items.types"

const usePriceFilter = (props: PriceFilterProps) => {

    const [state, setPrice] = useFilter(props)
    const price = state as PriceState

    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setPrice({...price, [name]: value})
    }

    return {price, handlePriceChange, setPrice}
}

export default usePriceFilter