import {useRef, useState} from 'react'
import {useLayoutEffect} from 'react'
import {useLayoutResizeObserve} from 'app/[locale]/_common/hooks/component/component.hooks'
import {useResponsive} from 'app/[locale]/_common/hooks/component/component.hooks'
import useResize from 'app/[locale]/_common/hooks/component/component.hooks'
import {useEffect} from 'react'
import useNavStore from 'app/[locale]/_store/nav/nav.store'

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

        if (width > 991) {
            setAllLinkHeight(0.85 * allLinkWidth)
            setLogoHeight(0.3 * containerWidth)
            setBestLinkHeight(0.6 * containerWidth)
        } else if (width > 576 && width <= 991) {
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


// let allLinkHeight = 0, bestLinkWidth = 0, logoWidth = 0
//
// const allLinkWidth = allLinkRef.current?.getBoundingClientRect().width ?? 0
// const containerWidth = containerRef.current?.getBoundingClientRect().width ?? 0
//
// if (device === 'large') {
//     allLinkHeight = allLinkWidth * 0.85
//     bestLinkWidth = containerWidth * 0.4
//     logoWidth = 0.3 * containerWidth
// }
// if (device === 'medium') {
//     bestLinkWidth = containerWidth
//     allLinkHeight = allLinkWidth
//     logoWidth = 0.5 * containerWidth
// }
// if (device === 'small') {
//     bestLinkWidth = containerWidth
//     allLinkHeight = allLinkWidth * 1.2
//     logoWidth = 0.8 * containerWidth
// }
// if (device === 'tiny') {
//     bestLinkWidth = containerWidth
//     allLinkHeight = allLinkWidth * 1.3
//     logoWidth = containerWidth
// }

//
// useLayoutEffect(() => {
//     calc()
// }, [])
//
// useLayoutResizeObserve(() => {
//     calc()
// })