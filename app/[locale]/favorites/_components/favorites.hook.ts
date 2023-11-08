import {useEffect, useRef, useState} from 'react'
import {CategoryItem} from 'app/_common/types/category-item'
import useModalStore from 'app/_common/store/modal/modal.store'
import useResize from 'app/_common/hooks/helpers/resize/resize.hook'
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'
import {useUserStore} from 'app/_common/store/user/user.store'
import favoritesContent from 'app/[locale]/favorites/_components/favorites.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
const useFavorites = () => {
    const transl = useLocale(favoritesContent)

    const getFavorites = useApiCall<{items: CategoryItem[] }>( {
        url: 'favorites'
    })

    const items = getFavorites.data?.items

    const user = useUserStore(state => state.user)

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

    useEffect(() => {
        if (user) {
            getFavorites.start()
        }
    }, [user])

    return {transl, height, itemRef, getFavorites, useApiCall, onLogin, items, user}
}

export default useFavorites