import {HamburgerProps} from 'components/nav/hamburger/hamburger.types'

const useHamburger = (props: HamburgerProps) => {
    const {hamburger, showModal, hideModal} = props

    const onHamburger = () => {
        if (hamburger) {
            hideModal()
        } else {
            showModal('hamburger')
        }
    }

    return {onHamburger}
}

export default useHamburger