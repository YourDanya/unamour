import {PriceFilterProps} from 'components/shop-items/price-filter/price-filter.component'
import {ChangeEvent} from 'react'
import {PriceState} from 'components/shop-items/shop-items.types'
import {useFilter} from 'components/shop-items/filters.hooks'

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