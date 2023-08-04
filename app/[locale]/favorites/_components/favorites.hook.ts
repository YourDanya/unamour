import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {CategoryItem} from 'app/_common/types/types'
import favoritesContent from 'app/[locale]/favorites/_components/favorites.content'
import useModalStore from 'app/_common/store/modal/modal.store'
import useResize from 'app/_common/hooks/helpers/resize/resize.hook'

const useFavorites = () => {
    const [transl] = useLocale(favoritesContent)

    const [width, setWidth] = useState(0)
    const [items, setItems] = useState<CategoryItem[] | null>(null)

    const getFavorites = useApiCall<{items: CategoryItem[] }>('users/favorites', {
        onSuccess: ({items}) => {
            setItems(items)
        }
    })

    useEffect(() => {
        getFavorites.start()
    }, [])

    const elemRef = useRef<HTMLDivElement | null>(null)

    const calcWidth = () => {
        const containerWidth = elemRef.current?.getBoundingClientRect().width as number
        let width = 0
        if (window.innerWidth > 992) {
            width = (containerWidth - 3 * 5) / 4
        } else {
            width = (containerWidth - 5) / 2
        }
        setWidth(width)
    }

    useResize(calcWidth)

    const {modalState, showModal} = useModalStore()

    const onLogin = () => {
        if (!modalState.sign) {
            showModal('sign')
        }
    }

    return {items, transl, width, elemRef, getFavorites, useApiCall, onLogin}
}

export default useFavorites