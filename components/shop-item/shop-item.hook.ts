import {useDispatch, useSelector} from "react-redux"
import React, {useState} from "react"
import {ClientItem} from "../../redux/shop-items/shop-items.types"
import {selectClientItems} from "../../redux/shop-items/shop-items.slice"
import {useImages} from "../../hooks/hooks";

export const useShopItem = (props: ClientItem) => {

    const {images} = props
    const dispatch = useDispatch()

    const [activeSize, setSize] = useState<string | null>(null)

    const handleSizeChange = (size: string) => {
        if (size === activeSize) {
            setSize(null)
        } else {
            setSize(size)
        }
    }

    const [checkout, setCheckout] = useState(true)

    const handleCheckoutButtonMouseEnter = () => {
        if (!activeSize) {
            setCheckout(false)
        }
    }

    const handleCheckoutButtonMouseLeave = () => {
        if (!checkout) {
            setCheckout(true)
        }
    }

    const [modalActive, setModalActive] = useState({modal: false, size: false, present: false})

    const handleModalSize = () => {
        setModalActive({modal: true, size: true, present: false})
    }

    const [presentLabel, setPresentLabel] = useState(true)

    const handlePresentClick = () => {
        if (!activeSize) {
            setPresentLabel(false)
        } else {
            setModalActive({modal: true, size: false, present: true})
        }
    }

    const handlePresentMouseLeave = () => {
        if (!presentLabel) {
            setPresentLabel(true)
        }
    }

    const [sliderCount, setSliderCount] = useState(0)

    const slideImages = useImages(images)

    let items: ClientItem[] = useSelector(selectClientItems)

    const similarItems: ClientItem[] = []
    const viewedItems: ClientItem[] = []

    for (let i = 0; i < items.length; i++) {
        if (i < 4) similarItems.push(items[i])
        if (i > items.length - 5) viewedItems.push(items[i])
    }

    const handleCartClick = () => {
        if (activeSize) {
            // dispatch(addItem({name, slug, slugCategory, size: activeSize, images, price, category, color,}))
        }
    }

    return {...props, activeSize, handleSizeChange, checkout, setCheckout, handleCheckoutButtonMouseEnter,
        handleCheckoutButtonMouseLeave, modalActive, setModalActive, handleModalSize, presentLabel, handlePresentClick,
        handlePresentMouseLeave, sliderCount, setSliderCount, slideImages, similarItems, viewedItems,
        handleCartClick}
}