import {Children} from 'react'
import {useRef} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {SliderProps} from 'app/[locale]/_common/components/slider/slider.types'
import {useCallback} from 'react'
import React from 'react'
import {MoveRef} from 'app/[locale]/_common/components/slider/slider.types'
import {useLayoutEffect} from 'react'

export const useSlider = (props: SliderProps) => {
    const testRef = useRef<number>()
    testRef.current = performance.now()

    const {children} = props
    const perSlide = props.perSlide ?? 1
    const [current, setCurrent] = useState(props.current ?? 0)
    const [elements, setElements] = useState(Children.toArray(children))
    const length = elements.length

    const slideRef = useRef<HTMLDivElement>(null)
    const [transition, setTransition] = useState('4s all')

    const getTransform = (current: number, translate: number) => {
        return `translateX(calc(${-100 * (current + length)}% + ${translate}px))`
    }
    const [transform, setTransform] = useState(getTransform(current, 0))

    const [height, setHeight] = useState(0)

    const onBack = () => {
        if (current === 0) {
            setCurrent(length)
            setTransform(getTransform(length, 0))
            setTransition('unset')
            return
        }

        setTransform(getTransform(current - 1, 0))
        setCurrent(current - 1)
    }

    const onForward = () => {
        // const value = getComputedStyle(slideRef.current as Element)
        //     .getPropertyValue('transform').split(', ')[4]

        if (current === length - 1) {
            setCurrent(-1)
            setTransform(getTransform(-1, 0))
            setTransition('unset')
            return
        }

        setTransform(getTransform(current + 1, 0))
        setCurrent(current + 1)
    }

    const moveRef = useRef<MoveRef>(
        {startX: 0, moving: false, current: current, fast: false, clientX: 0, blocking: false}
    )
    const [moveState, setMoveState] = useState({translate: 0, moving: false})

    const onUp = useCallback((event: MouseEvent | TouchEvent) => {
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onUp)
        document.removeEventListener('touchmove', onMove)
        document.removeEventListener('touchend', onUp)

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
        const width = slideRef.current?.children[moveRef.current.current].getBoundingClientRect().width as number
        moveRef.current.moving = false

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

        if (current >= length || current < 0) {
            // console.log('length - current - 1', length - current - 1)
            setCurrent(length - current - 1)
            setTransform(getTransform(length - current - 1, -translate))
        } else {
            setCurrent(current)
            setTransform(getTransform(current, 0))
            // setMoveState({translate: 0, moving: false})
            setTransition('4s all')
        }
        // console.log('current', current)
    }, [])

    const onMove = useCallback((event: MouseEvent | TouchEvent) => {
        let clientX
        const mobileEvent = event as TouchEvent
        const descEvent = event as MouseEvent

        if (mobileEvent.touches) {
            clientX = mobileEvent.touches[0].clientX
        } else {
            clientX = descEvent.clientX
        }

        moveRef.current.blocking = true

        const translate = clientX - moveRef.current.startX
        moveRef.current.clientX = clientX
        setTransform(getTransform(moveRef.current.current, translate))
    }, [])

    // const onBlock = useCallback((event: MouseEvent) => {
    //     moveRef.current.blocking = true
    //     // setTimeout(() => moveRef.current.blocking=false)
    //     document.removeEventListener('mouseup', onBlock)
    // }, [])

    const onDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {
        let clientX
        const mobileEvent = event as React.TouchEvent
        const descEvent = event as React.MouseEvent

        if (mobileEvent.touches) {
            clientX = mobileEvent.touches[0].clientX
        } else {
            clientX = descEvent.clientX
            event.preventDefault()
        }

        moveRef.current.clientX = clientX
        moveRef.current.startX = clientX
        moveRef.current.fast = true
        moveRef.current.moving = true

        setTimeout(() => {
            moveRef.current.fast = false
        }, 200)

        // setMoveState({translate: 0, moving: true})
        setTransition('unset')

        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseup', onUp)
        document.addEventListener('touchmove', onMove)
        document.addEventListener('touchend', onUp)
    }, [])

    useEffect(() => {
        requestAnimationFrame(() => {
            if (current >= length) {
                setCurrent(length + length - current - 1)
                setTransform(getTransform(length + length - current - 1, 0))
                setTransition('4s all')
            }

            if (current <= -1) {
                // console.log(`was ${current}; bacome ${-(current + 1)}`)
                // const transform = moveState.translate
                // const prevTransform = getTransform(current, moveState.translate)
                // const nextTransform = getTransform(-(current+1), 0)
                // console.log(`prev transform ${prevTransform}; next transform ${nextTransform}\n`)
                setCurrent(-(current + 1))
                setTransition('4s all')
                setTransform(getTransform(-(current + 1), 0))
                // setMoveState({translate: 0, moving: false})
            }
            moveRef.current.current = current
        })
        // console.log('current', current)
    }, [current])

    useLayoutEffect(() => {
        const elem = slideRef?.current?.querySelector('.slider-v2__element--current') as HTMLElement
        if (!elem) {
            return 
        }
        const height = elem.getBoundingClientRect().height
        setHeight(height)
    }, [current])

    !moveRef.current.moving && console.log('transform', transform)

    return {
        elements, length, slideRef, transition, onForward, onBack, current, perSlide, transform, onDown, setTransform,
        height
    }
}

export default useSlider

// useEffect(() => {
//     const test = testRef?.current as number
//     const testDiff = performance.now() - test
//     console.log('took time', testDiff)
// })

// const elementsWidthRef = useRef(0)

// const transformRef = useRef('')

// useEffect(() => {
//     elementsWidthRef.current =
//         Array.from(slideRef.current?.children as HTMLCollection).reduce((width, elem) => {
//             const index = +(elem.getAttribute('data-value') as string)
//             if (index >= 0 && index < length) {
//                 width += elem.getBoundingClientRect().width
//             }
//             return width
//         }, 0)
// }, [])