import useNavRoute from 'app/[locale]/_components/layout/nav/nav-route.hook'
import {MouseAction} from 'app/[locale]/_common/types/types'
import useModalStore from 'app/[locale]/_store/modal/modal.store'
import {ModalState} from 'app/[locale]/_store/modal/modal.types'
import {useLayoutEffect} from 'react'
import {useRef} from 'react'
import {useState} from 'react'
import useNavStore from 'app/[locale]/_store/nav/nav.store'

const useNav = () => {
    const {modalState, showModal, hideModal, hideTopModal} = useModalStore()

    const {home} = useNavRoute(hideModal)

    const onHideTopModal: MouseAction = (event) => {
        const name = event.currentTarget.getAttribute('name') as keyof ModalState
        hideTopModal(name)
    }

    const secondBlockRef = useNavStore(state => state.secondBlockRef)
    const navRef = useRef<HTMLDivElement | null>(null)

    const [isIntersecting, setIsIntersecting] = useState(false)

    const isIntersectingRef = useRef(false)

    const onScroll = () => {
        if (!secondBlockRef || !secondBlockRef.current || !navRef.current) {
            return
        }

        const navWidth = navRef.current.getBoundingClientRect().width
        const secondBlockTop = secondBlockRef.current.getBoundingClientRect().top

        if (secondBlockTop < navWidth) {
            isIntersectingRef.current = true
        }
    }

    useLayoutEffect(() => {
        if (!home) {
            return
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return {
        modalState, showModal, hideModal, home, onHideTopModal, isIntersecting, navRef
    }
}

export default useNav