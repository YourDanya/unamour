import {MouseAction} from 'types/types'
import {useRef} from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useLayoutEffect} from 'react'
import {DropdownProps} from 'components/common/dropdown/dropdown.types'

const useDropdown = (props: DropdownProps) => {
    const {parentName} = props
    const [show, setShow] = useState(false)
    const elemRef = useRef<HTMLDivElement>(null)
    // const showChildrenRef = useRef(false)
    // const transitionRef = useRef(false)
    // const showRef = useRef(false)
    // const [showChildren, setShowChildren] = useState(true)

    const onClick: MouseAction = (event) => {
        event.preventDefault()
        setShow(!show)
        // if (transitionRef.current) return
        // showRef.current = !showRef.current
    }

    const onTransition = () => {
        // transition end
        // if (transitionRef.current) {
        //     if (showChildrenRef.current && !showRef.current) {
        //         showChildrenRef.current = false
        //         setShowChildren(false)
        //     }
        // }
        // // transition start
        // else {
        //     if (!showChildrenRef.current) {
        //         showChildrenRef.current = true
        //         setShowChildren(true)
        //     }
        // }
        // transitionRef.current = !transitionRef.current
    }

    useLayoutEffect(() => {
        // const y = elemRef?.current?.firstElementChild?.getBoundingClientRect().y
    }, [])

    useEffect(() => {
        // const elem = elemRef.current as HTMLDivElement
        // elem.addEventListener('transitionstart', onTransition)
        // elem.addEventListener('transitionend', onTransition)
        // return (() => {
        //     elem.removeEventListener('transitionstart', onTransition)
        //     elem.removeEventListener('transitionend', onTransition)
        // })
    }, [])

    return {show, onClick, elemRef}
}

export default useDropdown