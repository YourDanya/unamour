import {useRef, useState} from 'react'
import useResize from 'app/_common/hooks/helpers/resize/resize.hook'

const useHome = () => {
    const allLinkRef = useRef<HTMLDivElement | null>(null)

    const [allLinkHeight, setAllLinkHeight] = useState(0)

    const calc = () => {
        const allLinkWidth = allLinkRef.current?.getBoundingClientRect().width ?? 0
        const width = window.innerWidth

        if (width > 992) {
            setAllLinkHeight(0.85 * allLinkWidth)
        } else if (width > 576 && width <= 992) {
            setAllLinkHeight(1.2 * allLinkWidth)
        } else if (width <= 575) {
            setAllLinkHeight(1.5 * allLinkWidth)
        }
    }

    useResize(calc)

    return {allLinkRef, allLinkHeight}
}

export default useHome

