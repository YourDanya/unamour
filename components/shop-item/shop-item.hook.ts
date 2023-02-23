import {useModal} from 'hooks/component/component.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {useMemo} from 'react'
import {useRouter} from 'next/router'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useRef} from 'react'
import {CartItem} from 'redux/cart/cart.types'
import {addItem} from 'redux/cart/cart.slice'
import {useState} from 'react'
import {MouseAction} from 'types/types'
import {useLayoutEffect} from 'react'
import {ShopItemVariant} from 'components/shop-item/shop-item.types'

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

    const color = useRouter().query.color as string

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

    const onAddItem = () => {
        const item = JSON.parse(JSON.stringify(cartItemRef.current)) as CartItem
        dispatch(addItem(item))
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