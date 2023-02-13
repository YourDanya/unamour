import {selectItemsQuantity} from 'redux/cart/cart.selector'
import {useSelector} from 'react-redux'

const useNavHeader = () => {
    const quantity = useSelector(selectItemsQuantity)
    return {quantity}
}

export default useNavHeader