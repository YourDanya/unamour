import {MouseAction} from 'app/_common/types/types'
import {buttonsContent} from 'app/[locale]/shop-items/[category]/[item]/_components/buttons/buttons.content'
import useModalStore from 'app/_common/store/modal/modal.store'
import {ButtonsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/buttons/buttons.types'
import {useState} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useUserStore} from 'app/_common/store/user/user.store'
import {useEffect} from 'react'
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'

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

    const user = useUserStore(state => state.user)

    const [liked, setLiked] = useState(false)

    const modalStore = useModalStore()

    const checkLiked = useApiCall<{favorite: boolean}>({
        url: `favorites/${id}/${color}`,
        onSuccess: ({favorite}) => {
            if (favorite) {
                setLiked(favorite)
            }
        }
    })

    useEffect(() => {
        if (!user) {
            return
        }

        checkLiked.start()
    }, [user])

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

