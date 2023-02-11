import {useToggleActive} from 'hooks/event-handler/event-handler.hooks'
import {useModal} from 'hooks/component/component.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {useMemo} from 'react'
import {useRouter} from 'next/router'
import {useSetActive} from 'hooks/event-handler/event-handler.hooks'
import {FetchedItem} from 'redux/shop-items/shop-items.types'

export const useShopItem = (props: FetchedItem) => {
    const [transl] = useLocale(props)

    const [activeSize, onSetActiveSize] = useToggleActive()
    const color = useRouter().query.color as string
    const [activeColor, onSetActiveColor] = useSetActive(color, 'data-value')

    const [modalState, showModal, hideModal] = useModal({ size: false, present: false})

    const currentVariant = useMemo(() => {
        return props.common.variants.find(variant => variant.color === activeColor) as FetchedItem['common']['variants'][number]
    }, [activeColor])

    return {activeSize, onSetActiveSize, modalState, showModal, hideModal, transl, onSetActiveColor, currentVariant}
}