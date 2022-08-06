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
        if (event.target!==event.currentTarget) return

        console.log('transition start')
        transitionRef.current.now = true
    }

    const handleTransitionEnd = (event: TransitionEvent) => {
        if (event.target!==event.currentTarget) return

        console.log('transition end')
        if (transitionRef.current.add !== null) {
            setCurrent(transitionRef.current.add)
            setTransition(0)
            transitionRef.current.add = null
        }
        transitionRef.current.now = false
    }

    const moveRef = useRef<{ startX: number, moving: false }>({startX: 0, moving: false})

    const [moveState, setMoveState] = useState({translate: 0, moving: false})

    const {moving} = moveState

    const handleMouseUp = useCallback( (event: MouseEvent) => {

        const translate = event.clientX - moveRef.current.startX

        if (translate) {

        } else {

        }

        setMoveState({translate: 0, moving: false})
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
    }, [])

    const handleMouseMove = useCallback((event: MouseEvent) => {
        const translate = event.clientX - moveRef.current.startX
        setMoveState({translate, moving: true})
    }, [])

    const handleMouseDown = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        moveRef.current.startX = event.clientX
        setMoveState({translate: 0, moving: true})
        setTransition(100)
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }, [])


    useEffect(() => {
        if (transition !== 400 && !moveState.moving) {
            setTransition(400)
        }
    }, [transition, moving])

    useEffect(() => {
        slideRef.current?.addEventListener('transitionstart', handleTransitionStart)
        slideRef.current?.addEventListener('transitionend', handleTransitionEnd)
        return () => {
            slideRef.current?.removeEventListener('transitionstart', handleTransitionStart)
            slideRef.current?.removeEventListener('transitionend', handleTransitionEnd)
        }
    }, [])

    const elemWidth = useMemo(() => `(${100 / perSlide}% - ${(perSlide - 1) * 5 / perSlide}px)`, [perSlide])

    const indent = useMemo(() => perSlide === 1 ? '0px' : '5px', [perSlide])

    return {
        ...props, indent, elements, length, slideRef, transition, handleForwardClick, handleBackClick, current,
        perSlide, elemWidth, handleMouseDown, handleMouseUp, handleMouseMove, moveState
    }
}

export default useSlider