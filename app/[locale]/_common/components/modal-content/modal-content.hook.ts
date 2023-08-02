import {MouseAction} from 'app/[locale]/_common/types/types'
import {useRef} from 'react'
import {useEffect} from 'react'
import {usePathname} from 'next/navigation'

const useModalContent = ( hideModal: (() => void) | undefined) => {
    const first = useRef(true)
    const path = usePathname()

    useEffect(() => {
        if (!first.current && hideModal) {
            hideModal()
        }
        first.current = false
    }, [path])

    const onHideModal: MouseAction = (event) => {
        event.preventDefault()
        hideModal && hideModal()
    }

    return {onHideModal}
}

export default useModalContent