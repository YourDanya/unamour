import {MouseAction} from 'app/[locale]/_common/types/types'
import {NavHeaderProps} from 'app/[locale]/_components/layout/nav/header/header.types'
import {ModalState} from 'app/[locale]/_store/modal/modal.types'
import {useCartStore} from 'app/[locale]/_store/cart/cart.store'
import {useCallback} from 'react'

const useNavHeader = (props: NavHeaderProps) => {
    const {showModal} = props

    const quantity = useCartStore(useCallback((state) => {
        return state.getItemsQuantity()
    }, []))

    const onShowModal: MouseAction = (event) => {
        const param = event.currentTarget.getAttribute('name') as keyof ModalState
        showModal(param)
    }

    return {quantity, onShowModal}
}

export default useNavHeader