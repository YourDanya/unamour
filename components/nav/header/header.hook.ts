import {selectItemsQuantity} from 'redux/cart/cart.selector'
import {useSelector} from 'react-redux'
import {useState} from 'react'
import {useEffect} from 'react'

const useNavHeader = () => {
    const _quantity = useSelector(selectItemsQuantity)
    const [quantity, setQuantity] = useState(_quantity)

    useEffect(() => {
        const quantity = JSON.parse(JSON.parse(localStorage.getItem('persist:nextjs') as string).cart).items[0].quantity
        console.log('quantity', quantity)
        setQuantity(quantity)
    }, [])

    return {quantity}
}

export default useNavHeader