import {useRef, useState} from 'react'
import {useLayoutEffect} from 'react'
import {useLayoutResizeObserve} from 'app/[locale]/_common/hooks/component/component.hooks'

const useHome = () => {
    const containerRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement)
    const allLinkRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement)
    const [allLinkWidth, setAllLinkWidth] = useState(0)
    const [bestLinkWidth, setBestLinkWidth] = useState(0)
    const [logoWidth, setLogoWidth] = useState(0)
    const [allLinkHeight, setAllLinkHeight] = useState(0)

    const calc = () => {
        const {width: allLinkWidth} = allLinkRef.current.getBoundingClientRect()
        const {width: containerWidth} = containerRef.current.getBoundingClientRect()

        setAllLinkWidth(allLinkWidth)
        if (window.innerWidth > 992) {
            setAllLinkHeight(allLinkWidth * 0.85)
            setBestLinkWidth(containerWidth * 0.4)
            setLogoWidth(0.3 * containerWidth)
        } else if (window.innerWidth > 768) {
            setBestLinkWidth(containerWidth)
            setAllLinkHeight(allLinkWidth)
            setLogoWidth(0.5 * containerWidth)
        } else if (window.innerWidth > 576) {
            setBestLinkWidth(containerWidth)
            setAllLinkHeight(allLinkWidth * 1.2)
            setLogoWidth(0.8 * containerWidth)
        } else {
            setBestLinkWidth(containerWidth)
            setAllLinkHeight(allLinkWidth * 1.3)
            setLogoWidth(containerWidth)
        }
    }

    useLayoutEffect(() => {
        calc()
    }, [])

    useLayoutResizeObserve(() => {
        calc()
    })

    return {allLinkWidth, allLinkRef, containerRef, bestLinkWidth, logoWidth, allLinkHeight}
}

export default useHome