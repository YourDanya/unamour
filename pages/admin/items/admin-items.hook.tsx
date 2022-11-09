import {useSelector} from 'react-redux'
import {selectClientItems} from 'redux/shop-items/shop-items.selector'

const useAdmin = () => {
    const items = useSelector(selectClientItems)
}

export default useAdmin