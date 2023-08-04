import {useRef, useState} from 'react'
import {useLayoutEffect} from 'react'
import useResize from 'app/_common/hooks/helpers/resize/resize.hook'
import {useEffect} from 'react'
import useNavStore from 'app/_common/store/nav/nav.store'

const useHome = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const allLinkRef = useRef<HTMLDivElement | null>(null)

    const [bestLinkHeight, setBestLinkHeight] = useState(0)
    const [logoHeight, setLogoHeight] = useState(0)
    const [allLinkHeight, setAllLinkHeight] = useState(0)

    const calc = () => {
        const allLinkWidth = allLinkRef.current?.getBoundingClientRect().width ?? 0
        const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0
        const width = window.innerWidth

        if (width > 992) {
            setAllLinkHeight(0.85 * allLinkWidth)
            setLogoHeight(0.3 * containerWidth)
            setBestLinkHeight(0.6 * containerWidth)
        } else if (width > 576 && width <= 992) {
            setAllLinkHeight(1.2 * allLinkWidth)
            setLogoHeight(0.6 * containerWidth)
            setBestLinkHeight(0.6 * containerWidth)
        } else if (width <= 575) {
            setAllLinkHeight(1.5 * allLinkWidth)
            setLogoHeight(0.6 * containerWidth)
            setBestLinkHeight(0.9 * containerWidth)
        }
    }

    useResize(calc)

    const setSecondBlockRef = useNavStore(state => state.setSecondBlockRef)

    useEffect(() => {
        setSecondBlockRef(containerRef)
    },[])

    return {allLinkRef, containerRef, bestLinkHeight, logoHeight, allLinkHeight}
}

export default useHome

