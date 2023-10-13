import {useEffect, useRef, useState} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {CategoryItem} from 'app/_common/types/category-item'
import favoritesContent from 'app/[locale]/favorites/_components/favorites.content'
import useModalStore from 'app/_common/store/modal/modal.store'
import useResize from 'app/_common/hooks/helpers/resize/resize.hook'
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'
import {useUserStore} from 'app/_common/store/user/user.store'
const useFavorites = () => {
    const [transl] = useLocale(favoritesContent)

    const [items, setItems] = useState<CategoryItem[] | null>(null)

    const getFavorites = useApiCall<{items: CategoryItem[] }>( {
        url: 'favorites',
        onSuccess: ({items}) => {
            setItems(items)
        }
    })

    const user = useUserStore(state => state.user)

    useEffect(() => {
        getFavorites.start()
    }, [])

    const itemRef = useRef<HTMLDivElement | null>(null)

    const [height, setHeight] = useState(0)
    const calcWidth = () => {
        const width = itemRef.current?.getBoundingClientRect().width as number
        setHeight(width * 4 / 3)
    }

    useResize(calcWidth, [], {skip: true})

    const {modalState, showModal} = useModalStore()
    const onLogin = () => {
        if (!modalState.sign) {
            showModal('sign')
        }
    }

    useEffect(() => {
        if (items) {
            calcWidth()
        }
    }, [items])

    return {transl, height, itemRef, getFavorites, useApiCall, onLogin, items, user}
}

export default useFavorites