import {ButtonsProps} from 'components/shop-item/buttons/buttons.types'
import {useLocale} from 'hooks/other/other.hooks'
import {buttonsContent} from 'components/shop-item/buttons/buttons.content'
import {useState} from 'react'
import {MouseAction} from 'types/types'
import {useSelector} from 'react-redux'
import {selectUser} from 'redux/user/user.selectors'
import {useApiCall} from 'utils/api/api-v2.utils'
import {useMemo} from 'react'

const useButtons = (props: ButtonsProps) => {
    const {activeSize, showModal, onAddItem, color, id} = props
    const [transl] = useLocale(buttonsContent)

    const [isCart, setIsCart] = useState(true)

    const onCartEnter: MouseAction = () => {
        if (!activeSize) {
            setIsCart(false)
        }
    }

    const onCartLeave: MouseAction = () => {
        if (!isCart) {
            setIsCart(true)
        }
    }

    const onCartClick = () => {
        if (activeSize) {
            onAddItem()
        }
    }

    const [isPresent, setIsPresent] = useState(true)

    const onPresentClick: MouseAction = (event) => {
        if (activeSize) {
            showModal(event)
        } else {
            setIsPresent(false)
        }
    }

    const onPresentLeave: MouseAction = () => {
        if (!activeSize) {
            setIsPresent(true)
        }
    }

    const user = useSelector(selectUser)

    const liked = useMemo(() => {
        if (!user) {
            return false
        }
        return !! user.favorites.find((itemId, index) => itemId === id && user.favoritesColors[index] === color)
    }, [user, color])

    return {
        isCart, onCartEnter, onCartLeave, onCartClick, isPresent, onPresentClick, onPresentLeave, transl, liked
    }
}


export default useButtons

