import {scrollFixedProps} from "./scroll-fixed.component"
import {useEffect, useRef, useState} from "react"
import {Property} from "csstype"
import Position = Property.Position

export type State = {
    position: Position,
    translateY?: number | string,
    top?: number | string,
    bottom?: number | string,
}

const useScrollHook = (props: scrollFixedProps) => {

    const [menuState, setMenuState] = useState<State>({
        position: 'fixed',
        top: 120,
        bottom: 'unset',
        translateY: 0
    })

    const stateRef = useRef({
        position: 'fixed',
        top: 0,
        scrollY: 0,
        height: 0,
        toBottom: false,
        first: true
    })

    const elemRef = useRef<HTMLDivElement | null>(null)

    const handleScroll = (event: Event) => {

        const scrollY = window.scrollY
        const viewPort = window.innerHeight
        const rect = elemRef.current?.getBoundingClientRect() as DOMRect
        const menuHeight = rect.height
        const parentElement = elemRef.current?.parentElement
        const parentRect = parentElement?.getBoundingClientRect() as DOMRect

        // console.log('\n')
        // console.log('rect top', rect.top)
        // console.log('viewport', viewPort)
        // console.log('rect bottom', rect.bottom)
        // console.log('parent bottom', parentRect.bottom)
        // console.log('parent element', parentElement)
        // console.log('current top', stateRef.current.top)

        let position: Position = 'static'
        let top: string | number = 'unset'
        let bottom: string | number = 'unset'
        let toUpdate = true
        let translateY: number = 0

        //scrolling down
        down: if (scrollY > stateRef.current.scrollY) {
            //reaching menu end
            if (rect.bottom <= viewPort + 10) {
                //reaching parent end
                if (parentRect.bottom <= viewPort + 100) {
                    if (stateRef.current.position !== 'static') {
                        position = 'static'
                        bottom = 'unset'
                        top = 'unset'
                        translateY = stateRef.current.top
                        toUpdate = true
                    } else {
                        toUpdate = false
                    }
                    break down
                }
                //not reaching parent end
                stateRef.current.top = scrollY + viewPort - 10 - menuHeight - 120
                //switching to fixed
                if (stateRef.current.position !== 'fixed') {
                    position = 'fixed'
                    bottom = 10
                    top = 'unset'
                    stateRef.current.toBottom = true
                }
                //already moving in fixed
                else {
                    toUpdate = false
                }
            }
            //not reaching end
            else {
                if (stateRef.current.first) {
                    stateRef.current.top = scrollY
                    toUpdate = false
                    stateRef.current.first = false
                    break down
                }
                //switched to static
                if (stateRef.current.position !== 'static') {
                    position = 'static'
                    top = 'unset'
                    bottom = 'unset'
                    translateY = stateRef.current.top
                }
                //already moving in static
                else {
                    toUpdate = false
                }
            }
        }
        //scrolling up
        else {
            //reaching menu top
            if (rect.top >= 120) {
                stateRef.current.top = scrollY
                //checking if we already set position
                if (stateRef.current.position !== 'fixed') {
                    bottom = 'unset'
                    position = 'fixed'
                    top = 120
                } else {
                    toUpdate = false
                }
            } else {
                //checking if we already set position
                if (stateRef.current.position !== 'static') {
                    position = 'static'
                    bottom = 'unset'
                    top = 'unset'
                    translateY = stateRef.current.top
                    stateRef.current.toBottom = false
                } else {
                    toUpdate = false
                }
            }
        }

        stateRef.current.scrollY = scrollY

        if (toUpdate) {
            stateRef.current.position = position
            setMenuState({position, top, bottom, translateY})
        }
    }

    const handleResize = () => {
        const newHeight = elemRef.current?.clientHeight as number
        const heightDiff = newHeight - stateRef.current.height

        if (stateRef.current.toBottom) {

            if(stateRef.current.top-heightDiff>120) {
                stateRef.current.top -= heightDiff
            } else {
                stateRef.current.toBottom = false
                stateRef.current.position = 'static'
                setMenuState({bottom: 'unset', top : 'unset', translateY: stateRef.current.top, position: 'static'})
            }
            if (stateRef.current.position === 'static' && heightDiff > 0) {
                setMenuState({bottom: 'unset', top: 'unset', translateY: stateRef.current.top, position: 'static'})
            }
        }
        stateRef.current.height = newHeight
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(handleResize)

        const elem = elemRef.current as Element
        stateRef.current.height = elem.clientHeight

        resizeObserver.observe(elem)
        window.addEventListener('scroll', handleScroll)
        return () => {
            resizeObserver.unobserve(elem)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return {...props, menuState, elemRef}
}

export default useScrollHook