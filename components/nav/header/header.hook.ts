import {selectItemsQuantity} from 'redux/cart/cart.selector'
import {useSelector} from 'react-redux'

const useNavHeader = () => {
    const quantity = useSelector(selectItemsQuantity)

    // useLayoutEffect(() => {
    //     setQuantity(selectQuantity)
    // }, [selectQuantity])

    // useLayoutEffect(() => {
    //     const quantity = getLSItemsQuantity()
    //     setQuantity(quantity)
    // }, [])

    return {quantity}
}

export default useNavHeader