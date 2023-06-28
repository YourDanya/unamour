import {useEffect} from 'react'
import {useState} from 'react'
import {ModalProps} from 'app/[locale]/_common/components/modal/modal.types'
import {useOmitFirstEffect} from 'app/[locale]/_common/hooks/component/component.hooks'

const useModal = (props: ModalProps) => {
    const {active} = props

    const [visible, setVisible] = useState(false)

    useOmitFirstEffect(() => {
        if (active) {
            setVisible(true)
        }
        else {
            setTimeout(() => {
                setVisible(false)
            }, 800)
        }
    }, [active])

    return {active, visible, setVisible}
}

export default useModal