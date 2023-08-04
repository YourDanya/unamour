import {MouseAction} from 'app/_common/types/types'
import {NavHeaderProps} from 'app/[locale]/_components/layout/nav/header/header.types'
import {ModalState} from 'app/_common/store/modal/modal.types'
import {useCartStore} from 'app/_common/store/cart/cart.store'
import {useCallback} from 'react'

const useNavHeader = (props: NavHeaderProps) => {
    const {showModal} = props

    const onShowModal: MouseAction = (event) => {
        const param = event.currentTarget.getAttribute('name') as keyof ModalState
        showModal(param)
    }

    return {onShowModal}
}

export default useNavHeader