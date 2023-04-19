import {MouseAction} from 'app/[locale]/_common/types/types'
import {NavHeaderProps} from 'app/[locale]/_components/layout/nav/header/header.types'
import {useSelector} from 'react-redux'
import {selectItemsQuantity} from 'app/[locale]/_redux/cart/cart.selector'
import {ModalState} from 'app/[locale]/_store/modal/modal.types'

const useNavHeader = (props: NavHeaderProps) => {
    const {showModal} = props
    const quantity = useSelector(selectItemsQuantity)

    // useLayoutEffect(() => {
    //     setQuantity(selectQuantity)
    // }, [selectQuantity])

    // useLayoutEffect(() => {
    //     const quantity = getLSItemsQuantity()
    //     setQuantity(quantity)
    // }, [])

    const onShowModal: MouseAction = (event) => {
        const param = event.currentTarget.getAttribute('name') as keyof ModalState
        showModal(param)
    }

    return {quantity, onShowModal}
}

export default useNavHeader