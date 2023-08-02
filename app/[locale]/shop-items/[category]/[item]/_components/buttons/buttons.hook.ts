import {MouseAction} from 'app/[locale]/_common/types/types'
import {buttonsContent} from 'app/[locale]/shop-items/[category]/[item]/_components/buttons/buttons.content'
import useFavoritesStore from 'app/[locale]/_store/favorites/favorites.store'
import useModalStore from 'app/[locale]/_store/modal/modal.store'
import {ButtonsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/buttons/buttons.types'
import {useMemo} from 'react'
import {useState} from 'react'
import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useUserStore} from 'app/[locale]/_store/user/user.store'

const useButtons = (props: ButtonsProps) => {
    const {props: {_id: id}, currentVariant: {color}} = props

    const {activeSize, showModal, onAddItem} = props
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
            showModal('present')
        } else {
            setIsPresent(false)
        }
    }

    const onPresentLeave: MouseAction = () => {
        if (!activeSize) {
            setIsPresent(true)
        }
    }

    const {favorites} = useFavoritesStore()
    const user = useUserStore(state => state.user)

    const liked = useMemo(() => {
        if (favorites.length === 0) {
            return false
        }
        return !! favorites.find((item) => item.id === id && item.color === color)
    }, [favorites, color])

    const modalStore = useModalStore()

    const onFavoriteLike: MouseAction = (event) => {
        if (!user) {
            modalStore.showModal('sign')
            event.stopPropagation()
        }
    }

    return {
        isCart, onCartEnter, onCartLeave, onCartClick, isPresent, onPresentClick, onPresentLeave, transl, liked,
        onFavoriteLike, id, color
    }
}


export default useButtons

