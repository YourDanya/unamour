import React, {Children, useCallback, useEffect, useMemo, useRef, useState} from "react"
import {SliderProps} from "./slider.component"
import {useExternalState} from "../../../hooks/component.hooks";

const useSlider = (props: SliderProps) => {

    const {children} = props

    const perSlide = props.perSlide ?? 1

    const [current, setCurrent] = useExternalState(props.current, props.setCurrent, 0)

    const elements = Children.toArray(children)
    const length = elements.length

    const slideRef = useRef<HTMLDivElement>(null)
    const transitionRef = useRef<{ now: boolean, add: null | number }>({now: false, add: null})
    const [transition, setTransition] = useState(400)

    const handleBackClick = () => {
        if (transitionRef.current.now) return
        if (current === 0) {
            if (perSlide !== 1) return
            transitionRef.current.add = length - 1
        }
        setCurrent(current - 1)
    }

    const handleForwardClick = () => {
        if (transitionRef.current.now) return
        if (perSlide !== 1 && current === length - perSlide) return
        if (current === length - 1) {
            transitionRef.current.add = 0
        }
        setCurrent(current + 1)
    }

    const handleTransitionStart = (event: TransitionEvent) => {
        console.log('transition start')

        if (event.target !== event.currentTarget) return

        transitionRef.current.now = true
    }

    const handleTransitionEnd = (event: TransitionEvent) => {
        if (event.target !== event.currentTarget) return

        console.log('transition end')
        if (transitionRef.current.add !== null) {
            setCurrent(transitionRef.current.add)
            setTransition(0)
            transitionRef.current.add = null
        }
        transitionRef.current.now = false
    }

    const elemWidth = useMemo(() => `(${100 / perSlide}% - ${(perSlide - 1) * 5 / perSlide}px)`, [perSlide])
    const indent = useMemo(() => perSlide === 1 ? '0px' : '5px', [perSlide])

    const moveRef = useRef<{ startX: number, moving: false, current: number, fast: boolean, clientX: number }>(
        {startX: 0, moving: false, current: current, fast: false, clientX: 0}
    )
    const [moveState, setMoveState] = useState({translate: 0, moving: false})
    const {moving} = moveState

    const timeRef = useRef(0)

    const handleUp = useCallback((event: MouseEvent | TouchEvent) => {
        
        console.log('touch end')

        let clientX
        const mobileEvent = event as TouchEvent
        const descEvent = event as MouseEvent
        if (mobileEvent.changedTouches) {
            clientX = mobileEvent.changedTouches[0].clientX
        }
        else {
            clientX = descEvent.clientX
        }

        console.log(clientX, 'clientX')

        const translate = moveRef.current.startX - clientX
        const width = slideRef.current?.children[0].getBoundingClientRect().width as number

        let toMove: number
        if (moveRef.current.fast) {
            if (translate > 0) {
                toMove = Math.ceil(translate / width)
            } else {
                toMove = Math.floor(translate / width)
            }
        } else {
            toMove = Math.round(translate / width)
        }

        const current = moveRef.current.current + toMove

        if (current < 0) {
            transitionRef.current.add = length - 1
        }
        if (current > length - 1) {
            transitionRef.current.add = 0
        }

        setMoveState({translate: 0, moving: false})
        setTransition(400)

        if (toMove !== 0 && !transitionRef.current.now) setCurrent(current)

        timeRef.current=Date.now()

        document.removeEventListener('mousemove', handleMove)
        document.removeEventListener('mouseup', handleUp)
        document.removeEventListener('touchmove', handleMove)
        document.removeEventListener('touchend', handleUp)
    }, [])

    const handleMove = useCallback((event: MouseEvent | TouchEvent) => {
        console.log('touch move')
        
        let clientX
        const mobileEvent = event as TouchEvent
        const descEvent = event as MouseEvent

        if (mobileEvent.touches) {
            clientX = mobileEvent.touches[0].clientX
        }
        else {
            clientX = descEvent.clientX
        }

        const translate = clientX - moveRef.current.startX
        moveRef.current.clientX=clientX
        setMoveState({translate, moving: true})
    }, [])

    const handleDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {

        console.log('touch start')

        let clientX
        const mobileEvent = event as React.TouchEvent
        const descEvent = event as React.MouseEvent

        if (mobileEvent.touches) {
            clientX = mobileEvent.touches[0].clientX
        }
        else {
            clientX = descEvent.clientX
            event.preventDefault()
        }

        if(transitionRef.current.now) return

        moveRef.current.clientX=clientX
        moveRef.current.startX = clientX
        moveRef.current.fast = true

        setTimeout(() => {
            moveRef.current.fast = false
        }, 200)

        setMoveState({translate: 0, moving: true})
        setTransition(0)

        document.addEventListener('mousemove', handleMove)
        document.addEventListener('mouseup', handleUp)
        document.addEventListener('touchmove', handleMove)
        document.addEventListener('touchend', handleUp)
    }, [])


    useEffect(() => {

        if (transition !== 400 && !moveState.moving) {
            console.log('time', Date.now()-timeRef.current)
            setTransition(400)
        }
    }, [transition, moving])

    useEffect(() => {
        moveRef.current.current = current
    }, [current])

    useEffect(() => {
        slideRef.current?.addEventListener('transitionstart', handleTransitionStart)
        slideRef.current?.addEventListener('transitionend', handleTransitionEnd)
        return () => {
            slideRef.current?.removeEventListener('transitionstart', handleTransitionStart)
            slideRef.current?.removeEventListener('transitionend', handleTransitionEnd)
        }
    }, [])

    return {
        ...props, indent, elements, length, slideRef, transition, handleForwardClick, handleBackClick, current,
        perSlide, elemWidth, handleDown, handleUp, handleMove, moveState
    }
}

export default useSlider