import {scrollFixedProps} from "./scroll-fixed.component"
import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react"
import {Property} from "csstype"
import Position = Property.Position
import {State, StateRef} from "./scroll-fixes.types"
import useScrollFixedRoute from "./scroll-fixed-route.hook"

const useScrollHook = (props: scrollFixedProps) => {

    const [state, setState] = useState<State>({position: 'static', top: 0, bottom: 'unset', translateY: 0})
    const stateRef = useRef<StateRef>({position: 'static', toParentTop: 0, scrollY: 0, height: 0,
        toBottom: false, first: true})
    const elemRef = useRef<HTMLDivElement | null>(null)

    const [transition, setTransition] = useState('unset')

    const handleScroll = useCallback ((event: Event) => {

        // const scrollY = window.scrollY
        // const viewPort = window.innerHeight
        // const rect = elemRef.current?.getBoundingClientRect() as DOMRect
        // const menuHeight = rect.height
        // const parentElement = elemRef.current?.parentElement
        // const parentRect = parentElement?.getBoundingClientRect() as DOMRect
        //
        // // console.log('\nscrolling')
        // // console.log('scrollY', scrollY)
        // // console.log('viewport', viewPort)
        // // console.log('rect bottom', rect.bottom)
        // // console.log('rect top', rect.top)
        // // console.log('parent bottom', parentRect.bottom)
        // // console.log('parent element', parentElement)
        // // console.log('current top', stateRef.current.top)
        // // console.log('scrollY ref', stateRef.current.scrollY)
        // // console.log('to parent top', stateRef.current.toParentTop)
        //
        // let position: Position = 'static'
        // let top: string | number = 'unset'
        // let bottom: string | number = 'unset'
        // let toUpdate = true
        // let translateY: number = 0
        // //scrolling down
        // down: if (scrollY > stateRef.current.scrollY) {
        //     //reaching menu end
        //     console.log('i am here')
        //     if (rect.bottom <= viewPort - 10) {
        //
        //         //reaching parent end
        //         if (parentRect.bottom <= viewPort + 100) {
        //             if (stateRef.current.position !== 'static') {
        //                 position = 'static'
        //                 bottom = 'unset'
        //                 top = 'unset'
        //                 translateY = stateRef.current.toParentTop
        //                 toUpdate = true
        //             } else {
        //                 toUpdate = false
        //             }
        //             break down
        //         }
        //         //not reaching parent end
        //         stateRef.current.toParentTop = scrollY + viewPort - 20 - menuHeight - 120
        //         //switching to fixed
        //         if (stateRef.current.position !== 'fixed') {
        //             position = 'fixed'
        //             bottom = 20
        //             top = 'unset'
        //             stateRef.current.toBottom = true
        //         }
        //         //already moving in fixed
        //         else {
        //             toUpdate = false
        //         }
        //     }
        //     //not reaching end
        //     else {
        //         console.log('not reaching end')
        //         //switched to static
        //         if (stateRef.current.position !== 'static') {
        //             position = 'static'
        //             top = 'unset'
        //             bottom = 'unset'
        //             translateY = stateRef.current.toParentTop
        //         }
        //         //already moving in static
        //         else {
        //             toUpdate = false
        //         }
        //     }
        // }
        // //scrolling up
        // else {
        //     console.log('i am fuck here')
        //     //reaching menu top
        //     if (rect.top >= 110) {
        //         stateRef.current.toParentTop = scrollY
        //         //checking if we already set position
        //         if (stateRef.current.position !== 'fixed') {
        //             bottom = 'unset'
        //             position = 'fixed'
        //             if (stateRef.current.toParentTop<=110) {
        //                 position = 'static'
        //             }
        //             top = 120
        //         } else {
        //             toUpdate = false
        //         }
        //     } else {
        //         //checking if we already set position
        //         if (stateRef.current.position !== 'static') {
        //             position = 'static'
        //             bottom = 'unset'
        //             top = 'unset'
        //             translateY = stateRef.current.toParentTop
        //             stateRef.current.toBottom = false
        //         } else {
        //             toUpdate = false
        //         }
        //     }
        //
        // }
        //
        // stateRef.current.scrollY = scrollY
        //
        // if (toUpdate) {
        //     stateRef.current.position = position
        //     setState({position, top, bottom, translateY})
        // }
        //
        // console.log('to parent top', stateRef.current.toParentTop)
        // console.log('scrollY', stateRef.current.scrollY)
    }, [])

    const handleResize = () => {
        const newHeight = elemRef.current?.clientHeight as number
        const heightDiff = newHeight - stateRef.current.height

        if (stateRef.current.toBottom) {

            if(stateRef.current.toParentTop-heightDiff>120) {
                stateRef.current.toParentTop -= heightDiff
            } else {
                stateRef.current.toBottom = false
                stateRef.current.position = 'static'
                setState({bottom: 'unset', top : 'unset', translateY: stateRef.current.toParentTop, position: 'static'})
            }
            if (stateRef.current.position === 'static' && heightDiff > 0) {
                setState({bottom: 'unset', top: 'unset', translateY: stateRef.current.toParentTop, position: 'static'})
            }
        }
        stateRef.current.height = newHeight
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(handleResize)
        const elem = elemRef.current as Element
        resizeObserver.observe(elem)

        window.addEventListener('scroll', handleScroll)
        return () => {
            resizeObserver.unobserve(elem)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    // useScrollFixedRoute(state, setState, stateRef, elemRef)

    return {...props, state, elemRef, transition}
}

export default useScrollHook