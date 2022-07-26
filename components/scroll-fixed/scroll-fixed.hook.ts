import {scrollFixedProps} from "./scroll-fixed.component"
import React, {useEffect, useRef, useState} from "react"
import {Property} from "csstype"
import Position = Property.Position
import {debounce, throttle} from 'lodash'

export type State = {
    position: Position,
    translateY?: number | string,
    top?: number | string,
    bottom?: number | string,
}

const useScrollHook = (props: scrollFixedProps) => {

    const [menuState, setMenuState] = useState<State>({
        position: 'fixed',
        top: 100,
        bottom: 'unset'
    })

    const stateRef = useRef({
        position: 'fixed',
        top: 100,
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
                console.log('rect bottom', rect.bottom)
                if (rect.bottom <= viewPort + 10) {
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
                if (rect.top >= 100 ) {
                    stateRef.current.top = scrollY + 100
                    //checking if we already set position
                    if (stateRef.current.position !== 'fixed') {
                        bottom = 'unset'
                        position = 'fixed'
                        top = 100
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

    const handleResize = throttle(() => {
        const newHeight = elemRef.current?.clientHeight as number
        const heightDiff = newHeight - stateRef.current.height
        // console.log('new height', newHeight)
        // console.log('previous height', stateRef.current.height)
        // console.log('heightDif',heightDiff)
        // stateRef.current.top +=heightDiff
        if (stateRef.current.toBottom) {
            stateRef.current.top -= heightDiff
        }
        stateRef.current.height = newHeight
    }, 100)


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