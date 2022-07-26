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
        bottom: 'unset'
    })

    const stateRef = useRef({
        position: 'fixed',
        top: 120,
        scrollY: 0,
        height: 0,
        toTop: true,
        toBottom: false,
        ticking: false
    })
    const elemRef = useRef<HTMLDivElement | null>(null)

    const handleScroll =
        (event: Event) => {
            console.log('\nscrolling')
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
            console.log('parent bottom', parentRect.bottom)
            // console.log('parent element', parentElement)
            let position: Position = 'static'
            let top: string | number = 'unset'
            let bottom: string | number = 'unset'
            let toUpdate = true

            //scrolling down
            if (scrollY > stateRef.current.scrollY) {
                //reaching menu end
                // console.log('rect bottom', rect.bottom)
                if (rect.bottom <= viewPort + 10) {
                    // reaching parent end
                    if (parentRect.bottom <= viewPort + 40) {
                        if (stateRef.current.position !== 'absolute') {
                            position = 'absolute'
                            bottom = 'unset'
                            top = stateRef.current.top
                            toUpdate = true
                        } else {
                            toUpdate = false
                        }
                    } else {
                        stateRef.current.top = scrollY + viewPort - menuHeight
                        //checking if we already set position
                        if (stateRef.current.position !== 'fixed') {
                            position = 'fixed'
                            bottom = 10
                            top = 'unset'
                            stateRef.current.toBottom = true
                        } else {
                            toUpdate = false
                        }
                    }
                } else {
                    //checking if we already set position
                    if (stateRef.current.position !== 'absolute') {
                        position = 'absolute'
                        top = stateRef.current.top
                        bottom = 'unset'
                    } else {
                        toUpdate = false
                    }
                }
            }
            //scrolling up
            else {
                //reaching menu top
                if (rect.top >= 120 ) {
                    stateRef.current.top = scrollY + 120
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
                    if (stateRef.current.position !== 'absolute') {
                        position = 'absolute'
                        bottom = 'unset'
                        top = stateRef.current.top
                        stateRef.current.toBottom = false
                    } else {
                        toUpdate = false
                    }
                }
            }

            stateRef.current.scrollY = scrollY

            if (toUpdate) {
                stateRef.current.position = position
                setMenuState({position, top, bottom})
            }
        }

    const handleResize = () => {
        const newHeight = elemRef.current?.clientHeight as number
        const heightDiff = newHeight - stateRef.current.height

        if (stateRef.current.toBottom) {
            console.log('top', stateRef.current.top)
            stateRef.current.top -= heightDiff
            console.log('top', stateRef.current.top)
            if (stateRef.current.position === 'absolute' && heightDiff > 0) {
                setMenuState({...menuState, bottom: 'unset', top: stateRef.current.top, position: 'absolute'})
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