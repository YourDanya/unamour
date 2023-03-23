import {selectItemsQuantity} from 'redux/cart/cart.selector'
import {useSelector} from 'react-redux'
import {MouseAction} from 'types/types'
import {NavHeaderProps} from 'components/nav/header/header.types'
import {ModalState} from 'components/store/modal/modal.types'

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