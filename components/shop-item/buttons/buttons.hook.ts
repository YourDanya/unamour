import React from 'react'
import {useCombineHandlers, useDoubleToggle} from 'hooks/event-handler.hooks'
import {ButtonsProps} from 'components/shop-item/buttons/buttons.component'

const useButtons = (props: ButtonsProps) => {

    const {activeSize, showModal} = props

    const [cart, handleCartMouseEnter, handleCartMouseLeave] = useDoubleToggle(true, {firstCond: !activeSize})

    const handleCartClick = () => {
        if (activeSize) {}
    }

    const [present, _handlePresentClick, handlePresentMouseLeave] = useDoubleToggle(true, {firstCond: !activeSize})

    const showPresentModal = (event: React.MouseEvent<HTMLElement>) => {
        if (activeSize) showModal(event)
    }

    const handlePresentClick = useCombineHandlers(_handlePresentClick, showPresentModal)

    return {
        ...props, cart, handleCartMouseEnter, handleCartMouseLeave, handleCartClick, present,
        handlePresentClick, handlePresentMouseLeave
    }
}


export default useButtons

