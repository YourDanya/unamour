import {useApiCall} from 'app/[locale]/_common/utils/api/api-v2.utils'
import {useLayoutResizeObserve} from 'app/[locale]/_common/hooks/component/component.hooks'
import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {CategoryItem} from 'app/[locale]/_redux/shop-items/shop-items.types'
import favoritesContent from 'app/[locale]/favorites/_components/favorites.content'
import useModalStore from 'app/[locale]/_store/modal/modal.store'

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
        if (window.innerWidth > 991) {
            width = (containerWidth - 3 * 5) / 4
        } else {
            width = (containerWidth - 5) / 2
        }
        setWidth(width)
    }

    useLayoutEffect(() => {
        if (items && items.length > 0) {
            calcWidth()
        }
    }, [items])

    useLayoutResizeObserve(calcWidth)

    const {modalState, showModal} = useModalStore()

    const onLogin = () => {
        if (!modalState.sign) {
            showModal('sign')
        }
    }

    return {items, transl, width, elemRef, getFavorites, useApiCall, onLogin}
}

export default useFavorites