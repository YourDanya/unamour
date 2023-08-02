import {useMemo, useRef, useState} from 'react'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useViewedStore} from 'app/[locale]/_store/viewed/viewed.store'
import {useEffect} from 'react'
import {FetchedItem} from 'app/[locale]/_common/types/types'
import {useShopItem} from 'app/[locale]/shop-items/[category]/[item]/_components/shop-item.hook'
import {CategoryItem} from 'app/[locale]/_common/types/types'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/shop-items/[category]/[item]/_components/additional/additional.content'
import useResize from 'app/[locale]/_common/hooks/helpers/resize/resize.hook'

const useAdditional = (props: ReturnType<typeof useShopItem>) => {
    const {props: {_id, common: {slugCategory}}, currentVariant: {color}} = props

    const transl = useLocale(dictionary)

    const viewedSaved = useViewedStore(state => state.saved)
    const setViewedSaved = useViewedStore(state => state.setSaved)

    const getViewedItems = useApiCall<{ items: CategoryItem[] }>('shop-item/saved', {
        method: 'POST',
    })
    const viewedItems = getViewedItems.data?.items

    const getSimilarItems = useApiCall<{items: CategoryItem[]}>(`shop-item/category/all`)
    const similarItems = getSimilarItems.data?.items

    useEffect(() => {
        getViewedItems.start(viewedSaved)
        getSimilarItems.start()

        if (viewedSaved.length > 10) {
            viewedSaved.push({_id, color})
        }

        const findIndex = viewedSaved.findIndex((viewSave) => {
            return (viewSave._id === _id && viewSave.color === color)
        })

        if (findIndex === -1) {
            viewedSaved.push({_id, color})
        }

        if (viewedSaved.length > 10) {
            viewedSaved.shift()
        }

        if (findIndex === -1) {
            setViewedSaved([...viewedSaved])
        }

    }, [])

    const onResize = () => {
        if (!elemRef.current) {
            return
        }

        const width = elemRef.current.getBoundingClientRect().width
        setHeight(width * 4 / 3)
    }

    const [height, setHeight] = useState(0)
    const elemRef = useRef<HTMLDivElement | null>(null)

    useResize(onResize)

    return {getViewedItems, viewedItems, getSimilarItems, similarItems, transl, height, elemRef, onResize}
}

export default useAdditional
