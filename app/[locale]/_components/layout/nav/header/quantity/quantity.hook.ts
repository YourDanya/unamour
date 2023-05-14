import {useCartStore} from 'app/[locale]/_store/cart/cart.store'
import {useCallback} from 'react'

const useQuantity = () => {
    const quantity = useCartStore(useCallback((state) => {
        return state.getItemsQuantity()
    }, []))

    return {quantity}
}

export default useQuantity