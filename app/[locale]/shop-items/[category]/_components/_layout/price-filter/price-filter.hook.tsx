import {ChangeEvent} from 'react'
import {PriceFilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/price-filter/price-filter.component'
import {PriceState} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {useFilter} from 'app/[locale]/shop-items/[category]/_components/_layout/filters.hooks'

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