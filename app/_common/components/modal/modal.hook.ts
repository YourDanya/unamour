import {useEffect} from 'react'
import {useState} from 'react'
import {ModalProps} from 'app/_common/components/modal/modal.types'
import useOmitFirstEffect from 'app/_common/hooks/helpers/omit-first-effect/omit-first-effect.hook'
import useDebounce from 'app/_common/hooks/helpers/debounce/debounce.hook'
import {useRef} from 'react'

const useModal = (props: ModalProps) => {
    const {active} = props

    const [visible, setVisible] = useState(false)
    const visibleRef = useRef(false)

    const onHideVisible = () => setTimeout(() => {
        if (!visibleRef.current) {
            setVisible(false)
        }
    }, 600)

    useOmitFirstEffect(() => {
        visibleRef.current = active
        if (active) {
            setVisible(true)
        }
        else {
            onHideVisible()
        }
    }, [active])

    return {active, visible, setVisible}
}

export default useModal