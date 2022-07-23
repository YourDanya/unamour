import {RangeSliderProps} from "./range-slider.component"
import React, {useRef, useState} from "react";

type SliderStateRef = {
    left: {
        x: number,
        translate: number,
        limit: boolean,
        diff: number
    },
    right: {
        x: number,
        translate: number,
        limit: boolean,
        diff: number
    },
    active: 'left' | 'right' | 'none'
}

type SliderState = {
    left: {
        translate: number
    },
    right: {
        translate: number
    },
    gradient: string
}

const useRangeSlider = (props: RangeSliderProps) => {

    const stateRef = useRef<SliderStateRef>({
        left: {x: 0, translate: 0, limit: false, diff: 0},
        right: {x: 0, translate: 184, limit: false, diff: 0},
        active: 'none'
    })

    const calcGradient = () => {
        const left = stateRef.current.left.translate
        const right = stateRef.current.right.translate
        const trackWidth = elemsRef.current.track?.getBoundingClientRect().width as number
        const thumbWidth = elemsRef.current.left?.getBoundingClientRect().width as number
        const leftPercent = left/trackWidth * 100
        const rightPercent = (right+thumbWidth)/trackWidth * 100

        return `to right, #e2e2e2 ${leftPercent}%, black ${leftPercent}% ${rightPercent}%, #e2e2e2 ${rightPercent}%`
    }

    const [state, setState] = useState<SliderState>({
        left: {translate: 0},
        right: {translate: 184},
        gradient: 'to right, black 0 100%'
    })

    const elemsRef = useRef<{ left: HTMLButtonElement | null, right: HTMLButtonElement | null, track: HTMLDivElement | null }>({
        left: null,
        right: null,
        track: null
    })

    const handleMouseUp = () => {
        stateRef.current.active = 'none'
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (event: MouseEvent) => {
        // active thumb
        const active = stateRef.current.active as 'left' | 'right'
        //track rect
        const trackRect = (elemsRef.current.track as Element).getBoundingClientRect()
        // start coordinate
        const start = trackRect.x
        //width of track
        const trackWidth = trackRect.width
        //width of thumb
        const thumbWidth = (elemsRef.current.left as Element).getBoundingClientRect().width

        //current mouse x coordinate
        let x = event.clientX
        //width from start to current
        let translate = (stateRef.current[active].translate + (x - stateRef.current[active].x))
        //limit
        let limit = false
        //if moving first thumb
        if (active === 'left') {
            const {left} = stateRef.current
            // if mouse position less than 0
            if (translate <= 0) {
                if (!left.limit) {
                    x = start + left.diff
                    translate = 0
                    limit = true
                } else {
                    return
                }
            }
            const rightTranslate = stateRef.current.right.translate
            if (translate >= rightTranslate) {
                if (!left.limit) {
                    x = rightTranslate + start + left.diff
                    translate = rightTranslate
                    limit = true
                } else {
                    return
                }
            }
        }
        // if moving second thumb
        else {
            const {right} = stateRef.current
            // if mouse position more than track width
            if (translate >= trackWidth - thumbWidth) {
                if (!right.limit) {
                    x = start + trackWidth - thumbWidth + right.diff
                    translate = trackWidth - thumbWidth
                    limit = true
                } else {
                    return
                }
            }
            const leftTranslate = stateRef.current.left.translate
            // if mouse position less than left
            if (translate <= leftTranslate) {
                if (!right.limit) {
                    x = leftTranslate + start + right.diff
                    translate = leftTranslate
                    limit = true
                }
                else {
                    return
                }
            }
        }
        stateRef.current[active] = {...stateRef.current[active], x, translate, limit}
        const gradient = calcGradient()
        setState({...state, [active]: {translate}, gradient})
    }

    const handleThumbDown = (event: React.MouseEvent) => {
        event.preventDefault()

        const {name} = event.target as HTMLButtonElement
        const active = name as 'left' | 'right'

        stateRef.current.active = active
        const thumbX = elemsRef.current[active]?.getBoundingClientRect().x as number
        stateRef.current[active].diff = event.clientX - thumbX
        stateRef.current[active].x = event.clientX

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    const handleTrackDown = (event: React.MouseEvent) => {
        event.preventDefault()

        const trackRect = elemsRef.current.track?.getBoundingClientRect()
        const start = trackRect?.x as number
        const trackRight = trackRect?.right as number
        const trackWidth = trackRect?.width as number

        const leftRect = elemsRef.current.left?.getBoundingClientRect()
        const thumbWidth = leftRect?.width as number
        const thumbHalfWidth = thumbWidth / 2
        const leftX = leftRect?.x as number
        const rightX = elemsRef.current.right?.getBoundingClientRect().x as number

        let x = event.clientX
        let translate = x - start - thumbHalfWidth
        let active: 'left' | 'right'

        if (x - thumbHalfWidth <= start) {
            x = start
            translate = 0
        }
        if (x >= trackRight - thumbHalfWidth) {
            x = trackRight - thumbWidth
            translate = trackWidth - thumbWidth
        }

        if (Math.abs(leftX + thumbWidth - x) <= Math.abs(rightX - x)) {
            active = 'left'
        } else {
            active = 'right'
        }

        stateRef.current[active] = {...stateRef.current[active], x, translate, limit: false, diff: 8}
        stateRef.current.active = active
        const gradient = calcGradient()
        setState({...state, [active]: {translate}, gradient})

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    return {...props, elemsRef, handleTrackDown, handleThumbDown, state}
}

export default useRangeSlider