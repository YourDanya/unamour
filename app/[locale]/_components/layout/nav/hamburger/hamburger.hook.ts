import {HamburgerProps} from 'app/[locale]/_components/layout/nav/hamburger/hamburger.types'

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