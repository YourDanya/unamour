import {MouseAction} from 'app/_common/types/types'
import {ShopItemVariant} from 'app/[locale]/shop-items/[category]/[item]/_components/shop-item.types'
import useModal from 'app/_common/hooks/helpers/modal/modal.hook'
import {useRef} from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useRouter} from 'next/navigation'
import useSearch from 'app/[locale]/search/_components/search.hook'
import {useSearchParams} from 'next/navigation'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {useCartStore} from 'app/_common/store/cart/cart.store'
import useModalStore from 'app/_common/store/modal/modal.store'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'

export const useShopItem = (props: FetchedItem) => {
    const [transl] = useLocale(props)

    const [activeSize, setActiveSize] = useState('')

    const onActiveSize: MouseAction = (event) => {
        const size = event.currentTarget.getAttribute('name') as string
        if (activeSize === size) {
            setActiveSize('')
        } else {
            setActiveSize(size)
        }
    }

    const color = useSearchParams().get('color') as string

    const [currentVariant, setCurrentVariant] = useState(() => {
        let currentVariant = props.variants.find(variant => variant.color === color)
        if (!currentVariant) {
            currentVariant = props.variants[0]
        }
        return currentVariant
    })

    const onCurrentVariant: MouseAction = (event) => {
        const color = event.currentTarget.getAttribute('name') as string
        const variant = props.variants.find(variant => variant.color === color) as ShopItemVariant
        if (!variant.sizes.find((size) => activeSize === size)) {
            setActiveSize('')
        }
        setCurrentVariant(variant)
    }

    const [modalState, setModalState] = useState({size: false, present: false, modal: false})

    const showModal = (prop: string) => {
        setModalState({...modalState, [prop]: true})
    }

    const hideModal = () => {
        setModalState({size: false, present: false, modal: false})
    }

    const addItem = useCartStore(state => state.addItem)

    const showGlobalModal = useModalStore(state => state.showModal)

    const addCart = useApiCall('cart', {method: 'POST'})

    const onAddItem = () => {
        const {images, price} = currentVariant
        const {slug, slugCategory, translations: {ua: {name: uaName}, ru: {name: ruName}, eng: {name: engName}}} = props
        const shopItemId = props._id
        const size = activeSize
        const color = currentVariant.color

        const saveItem = {
            shopItemId, size, color, quantity: 1
        }
        const cartItem = {
            _id: `${shopItemId}_${color}_${size}`,
           ...saveItem, images, price, slug, slugCategory,
            translations: {ua: {name: uaName}, eng: {name: engName}, ru: {name: ruName}}
        }

        addItem(cartItem)
        addCart.start({item: saveItem, option: 'create'})
        showGlobalModal('shopping')
    }

    return {
        props, activeSize, onActiveSize, modalState, showModal, hideModal, transl, onCurrentVariant, currentVariant,
        onAddItem
    }
}