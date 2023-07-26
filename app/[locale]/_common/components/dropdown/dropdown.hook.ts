import {useRef} from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useLayoutEffect} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {DropdownProps} from 'app/[locale]/_common/components/dropdown/dropdown.types'

const useDropdown = (props: DropdownProps) => {
    const {parentName} = props
    const [show, setShow] = useState(false)
    const elemRef = useRef<HTMLDivElement>(null)

    const onClick: MouseAction = (event) => {
        event.preventDefault()
        setShow(!show)
        if (props.onClick) {
            props.onClick()
        }
    }

    return {show, onClick, elemRef}
}

export default useDropdown