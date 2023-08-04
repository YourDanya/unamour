import {useCartStore} from 'app/_common/store/cart/cart.store'
import {useCallback} from 'react'

const useQuantity = () => {
    const quantity = useCartStore(useCallback((state) => {
        return state.getItemsQuantity()
    }, []))

    return {quantity}
}

export default useQuantity