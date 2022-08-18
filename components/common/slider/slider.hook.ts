import React, {Children, useCallback, useEffect, useMemo, useRef, useState} from "react"
import {SliderProps} from "./slider.component"
import {useExternalState} from "../../../hooks/component.hooks"

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
        console.log('transition end')
        if (event.target !== event.currentTarget) return
        if (transitionRef.current.add !== null) {
            setCurrent(transitionRef.current.add)
            setTransition(0)
            transitionRef.current.add = null
        }
        transitionRef.current.now = false
        moveRef.current.blocking = false
    }

    const elemWidth = useMemo(() => `(${100 / perSlide}% - ${(perSlide - 1) * 5 / perSlide}px)`, [perSlide])
    const indent = useMemo(() => perSlide === 1 ? '0px' : '5px', [perSlide])

    const moveRef = useRef<{ startX: number, moving: false, current: number, fast: boolean, clientX: number, blocking: boolean }>(
        {startX: 0, moving: false, current: current, fast: false, clientX: 0, blocking: false}
    )
    const [moveState, setMoveState] = useState({translate: 0, moving: false})

    const handleUp = useCallback((event: MouseEvent | TouchEvent) => {

        let clientX
        const mobileEvent = event as TouchEvent
        const descEvent = event as MouseEvent
        if (mobileEvent.changedTouches) {
            clientX = mobileEvent.changedTouches[0].clientX
        } else {
            event.preventDefault()
            clientX = descEvent.clientX
        }

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

        let current = moveRef.current.current + toMove

        console.log('current', current)
        if (current < 0) {
            if (perSlide>1) {
                current = 0
            }
            else {
                transitionRef.current.add = length - 1
            }
        }
        if (current > length - perSlide) {
            if (perSlide>1) {
                current = length - perSlide
            }
            else transitionRef.current.add = 0
        }

        setMoveState({translate: 0, moving: false})
        setTransition(400)

        if (Math.abs(toMove) > 0 && !transitionRef.current.now) {
            setCurrent(current)
        }

        document.removeEventListener('mousemove', handleMove)
        document.removeEventListener('mouseup', handleUp)
        document.removeEventListener('touchmove', handleMove)
        document.removeEventListener('touchend', handleUp)
    }, [])

    const handleMove = useCallback((event: MouseEvent | TouchEvent) => {

        let clientX
        const mobileEvent = event as TouchEvent
        const descEvent = event as MouseEvent

        if (mobileEvent.touches) {
            clientX = mobileEvent.touches[0].clientX
        } else {
            clientX = descEvent.clientX
        }

        moveRef.current.blocking=true

        const translate = clientX - moveRef.current.startX
        moveRef.current.clientX = clientX
        setMoveState({translate, moving: true})

    }, [])

    const handleBlock = useCallback((event: MouseEvent) => {
        console.log('mouse up')
        moveRef.current.blocking = true
        // setTimeout(() => moveRef.current.blocking=false)
        document.removeEventListener('mouseup', handleBlock)
    }, [])

    const handleDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {

        let clientX
        const mobileEvent = event as React.TouchEvent
        const descEvent = event as React.MouseEvent

        if (mobileEvent.touches) {
            clientX = mobileEvent.touches[0].clientX
        } else {
            clientX = descEvent.clientX
            event.preventDefault()
        }

        if (transitionRef.current.now) {
            document.addEventListener('mouseup', handleBlock)
            return
        }

        moveRef.current.clientX = clientX
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

    const handleClickCapture = useCallback ((event: React.MouseEvent) => {
        if (moveRef.current.blocking) {
            event.preventDefault()
            if(!transitionRef.current.now) {
                moveRef.current.blocking = false
            }
        }
    }, [])

    useEffect(() => {
        moveRef.current.current = current

        console.log('updating current')
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
        perSlide, elemWidth, handleDown, handleUp, handleMove, moveState, transitionRef, moveRef, handleClickCapture
    }
}

export default useSlider