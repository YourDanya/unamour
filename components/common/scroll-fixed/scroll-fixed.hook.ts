import {ScrollFixedProps} from 'components/common/scroll-fixed/scroll-fixed.component'
import {useCallback, useEffect, useRef, useState} from 'react'
import {useLayoutResizeObserve} from 'hooks/component/component.hooks'
import {State, StateRef} from 'components/common/scroll-fixed/scroll-fixes.types'
import useScrollFixedRoute from 'components/common/scroll-fixed/scroll-fixed-route.hook'
import {Property} from 'csstype'
import Position = Property.Position

const useScrollHook = (props: ScrollFixedProps) => {

    const {topOffset, bottomOffset} = props

    const [state, setState] = useState<State>({position: 'static', top: 0, bottom: 'unset', translateY: 0})
    const stateRef = useRef<StateRef>({position: 'static', toParentTop: 0, scrollY: 0, height: 0,
        toBottom: false, first: true, parentToPageTop: topOffset, self: false})
    const elemRef = useRef<HTMLDivElement | null>(null)
    const [transition, setTransition] = useState('unset')

    const handleScroll = useCallback ((event: Event) => {

        if (stateRef.current.self) {
            stateRef.current.self = false
            return
        }
        console.log('scrollY prev', stateRef.current.scrollY)

        const scrollY = window.scrollY
        const viewPort = window.innerHeight
        const rect = elemRef.current?.getBoundingClientRect() as DOMRect
        const menuHeight = rect.height
        const parentElement = elemRef.current?.parentElement
        const parentRect = parentElement?.getBoundingClientRect() as DOMRect

        // console.log('\nscrolling', scrollY)
        console.log('scrollY', scrollY)
        // console.log('viewport', viewPort)
        // console.log('rect bottom', rect.bottom)
        // console.log('rect top', rect.top)
        // console.log('parent bottom', parentRect.bottom)
        // console.log('parent top', parentRect.top)
        // console.log('parent element', parentElement)
        // console.log('current top', stateRef.current.top)
        // console.log('scrollY ref', stateRef.current.scrollY)
        // console.log('to parent top', stateRef.current.toParentTop)
        // console.log('parentToPageTop', stateRef.current.parentToPageTop)

        let position: Position = 'static'
        let top: string | number = 'unset'
        let bottom: string | number = 'unset'
        let toUpdate = true
        let translateY: number = 0

        //scrolling down
        down: if (scrollY > stateRef.current.scrollY) {
            //reaching menu end
            console.log('scrolling down')
            if (rect.bottom - viewPort <= - bottomOffset + 5) {
                //reaching parent end
                if (parentRect.bottom <= viewPort + 100) {
                    if (stateRef.current.position !== 'static') {
                        position = 'static'
                        bottom = 'unset'
                        top = 'unset'
                        translateY = stateRef.current.toParentTop
                        toUpdate = true
                    } else {
                        toUpdate = false
                    }
                    break down
                }

                stateRef.current.toParentTop = scrollY + rect.top - stateRef.current.parentToPageTop
                //switching to fixed
                if (stateRef.current.position !== 'fixed') {
                    position = 'fixed'
                    bottom = bottomOffset
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
                console.log('not reaching end')
                //switched to static
                if (stateRef.current.position !== 'static') {
                    position = 'static'
                    top = 'unset'
                    bottom = 'unset'
                    translateY = stateRef.current.toParentTop
                }
                //already moving in static
                else {
                    toUpdate = false
                }
            }
        }
        //scrolling up
        else {
            console.log('scrolling up')
            //reaching menu top
            if (rect.top >= topOffset - 5) {
                stateRef.current.toParentTop = scrollY + rect.top - stateRef.current.parentToPageTop
                //checking if we already set position
                if (stateRef.current.position !== 'fixed') {
                    bottom = 'unset'
                    position = 'fixed'
                    if (stateRef.current.toParentTop<=topOffset - 5) {
                        position = 'static'
                    }
                    top = topOffset
                } else {
                    toUpdate = false
                }
            } else {
                //checking if we already set position
                if (stateRef.current.position !== 'static') {
                    position = 'static'
                    bottom = 'unset'
                    top = 'unset'
                    translateY = stateRef.current.toParentTop
                    stateRef.current.toBottom = false
                } else {
                    toUpdate = false
                }
            }

        }

        stateRef.current.scrollY = scrollY

        console.log(stateRef.current.scrollY)

        if (toUpdate) {
            stateRef.current.position = position
            setState({position, top, bottom, translateY})
        }

    }, [])

    const handleResize = () => {
        const newHeight = elemRef.current?.clientHeight as number
        const heightDiff = newHeight - stateRef.current.height

        if (stateRef.current.toBottom) {
            if(stateRef.current.toParentTop-heightDiff>topOffset) {
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

    const calcParentToPageTop = () => {
        const parentRect = elemRef.current?.parentElement?.getBoundingClientRect() as DOMRect
        // console.log(parentRect.top + window.scrollY)
        // console.log('parent rect top', parentRect.top)
        // console.log('scrollY', window.scrollY)
        stateRef.current.parentToPageTop = parentRect.top + window.scrollY
    }

    const handleTransitionEnd = () => {
        setTransition('unset')
    }

    useEffect(() => {
        const resizeObserver = new ResizeObserver(handleResize)
        const elem = elemRef.current as Element
        resizeObserver.observe(elem)

        window.addEventListener('scroll', handleScroll)
        elem.addEventListener('transitionend', handleTransitionEnd)

        return () => {
            resizeObserver.unobserve(elem)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useLayoutResizeObserve(calcParentToPageTop)

    useScrollFixedRoute(state, setState, stateRef, elemRef)

    return {...props, state, elemRef, transition}
}

export default useScrollHook