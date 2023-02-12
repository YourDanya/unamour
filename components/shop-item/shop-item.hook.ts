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
    const [activeColor, setActiveColor] = useState(color)

    const onActiveColor: MouseAction = (event) => {
        const color = event.currentTarget.getAttribute('name') as string
        setActiveColor(color)
    }

    const [modalState, showModal, hideModal] = useModal({ size: false, present: false})

    const currentVariant = useMemo(() => {
        return props.common.variants.find(variant => variant.color === activeColor) as FetchedItem['common']['variants'][number]
    }, [activeColor])

    const dispatch = useDispatch()
    const cartItemRef = useRef<CartItem>({} as CartItem)

    const onAddItem = () => {
        const item = cartItemRef.current as CartItem
        dispatch(addItem(item))
    }

    useEffect(() => {
        const {common: {slug, slugCategory},
            translations: {ua: {name: uaName}, eng: {name: engName}, ru: {name: ruName}}} = props
        const {images, price} = currentVariant
        cartItemRef.current = {
            common: {slug, slugCategory, images, price, color: activeColor, size: ''},
            translations: {ua: {name: uaName}, eng: {name: engName}, ru: {name: ruName}},
            quantity: 1
        }
    }, [])

    useEffect(() => {
        cartItemRef.current.common.size = activeSize
    }, [activeSize])

    useEffect(() => {
        cartItemRef.current.common.color = activeColor
    }, [activeColor])

    return {
        activeSize, onActiveSize, modalState, showModal, hideModal, transl, onActiveColor, currentVariant,
        onAddItem
    }
}