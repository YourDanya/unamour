import {MouseAction} from 'app/[locale]/_common/types/types'
import {ShopItemVariant} from 'app/[locale]/shop-items/[category]/[id]/_components/shop-item.types'
import {useModal} from 'app/[locale]/_common/hooks/component/component.hooks'
import {useRef} from 'react'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useRouter} from 'next/navigation'
import useSearch from 'app/[locale]/search/_components/search.hook'
import {useSearchParams} from 'next/navigation'
import {FetchedItem} from 'app/[locale]/_common/types/types'
import {CartItem} from 'app/[locale]/_store/cart/cart.types'
import {useCartStore} from 'app/[locale]/_store/cart/cart.store'
import useModalStore from 'app/[locale]/_store/modal/modal.store'

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
        let currentVariant = props.common.variants.find(variant => variant.color === color)
        if (!currentVariant) {
            currentVariant = props.common.variants[0]
        }
        return currentVariant
    })

    const onCurrentVariant: MouseAction = (event) => {
        const color = event.currentTarget.getAttribute('name') as string
        const variant = props.common.variants.find(variant => variant.color === color) as ShopItemVariant
        if (!variant.sizes.find((size) => activeSize === size)) {
            setActiveSize('')
        }
        setCurrentVariant(variant)
    }

    const [modalState, showModal, hideModal] = useModal({ size: false, present: false})

    const dispatch = useDispatch()
    const cartItemRef = useRef<CartItem>({} as CartItem)

    const addItem = useCartStore(state => state.addItem)

    const showGlobalModal = useModalStore(state => state.showModal)

    const onAddItem = () => {
        const item = JSON.parse(JSON.stringify(cartItemRef.current)) as CartItem
        addItem(item)
        showGlobalModal('shopping')
    }

    useEffect(() => {
        const {_id, common: {slug, slugCategory},
            translations: {ua: {name: uaName}, eng: {name: engName}, ru: {name: ruName}}} = props
        cartItemRef.current = {
            common: {itemId: _id, slug, slugCategory, size: '', ...currentVariant},
            translations: {ua: {name: uaName}, eng: {name: engName}, ru: {name: ruName}},
            quantity: 1
        }
    }, [])

    useEffect(() => {
        const {color, images, price} = currentVariant
        cartItemRef.current.common = {
            ...cartItemRef.current.common, color, images, price, _id: `${currentVariant._id}${activeSize}`
        }
    }, [currentVariant])

    useEffect(() => {
        cartItemRef.current.common.size = activeSize
        cartItemRef.current.common._id = `${currentVariant._id}${activeSize}`
    }, [activeSize])

    return {
        activeSize, onActiveSize, modalState, showModal, hideModal, transl, onCurrentVariant, currentVariant,
        onAddItem
    }
}