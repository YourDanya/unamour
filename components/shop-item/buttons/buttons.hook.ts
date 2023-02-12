import {ButtonsProps} from 'components/shop-item/buttons/buttons.types'
import {useLocale} from 'hooks/other/other.hooks'
import {buttonsContent} from 'components/shop-item/buttons/buttons.content'
import {useState} from 'react'
import {MouseAction} from 'types/types'

const useButtons = (props: ButtonsProps) => {
    const {activeSize, showModal, onAddItem} = props
    const [transl] = useLocale(buttonsContent)

    const [isCart, setIsCart] = useState(true)

    const onCartEnter: MouseAction = () => {
        if (!activeSize) {
            setIsCart(false)
        }
    }

    const onCartLeave: MouseAction = () => {
        if (!isCart) {
            setIsCart(true)
        }
    }

    const onCartClick = () => {
        if (activeSize) {
            onAddItem()
        }
    }

    const [isPresent, setIsPresent] = useState(true)

    const onPresentClick: MouseAction = (event) => {
        if (activeSize) {
            showModal(event)
        } else {
            setIsPresent(false)
        }
    }

    const onPresentLeave: MouseAction = () => {
        if (!activeSize) {
            setIsPresent(true)
        }
    }

    return {
        isCart, onCartEnter, onCartLeave, onCartClick, isPresent, onPresentClick, onPresentLeave, transl
    }
}


export default useButtons

