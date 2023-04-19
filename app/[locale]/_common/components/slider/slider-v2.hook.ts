import {Children} from 'react'
import {useRef} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {SliderProps} from 'app/[locale]/_common/components/slider/slider.types'

export const useSlider = (props: SliderProps) => {
    const {children} = props

    const perSlide = props.perSlide ?? 1

    const [current, setCurrent] = useState(props.current ?? 0)

    const [elements, setElements] = useState(Children.toArray(children))

    const length = elements.length

    const slideRef = useRef<HTMLDivElement>(null)

    const [transition, setTransition] = useState('0.4s all')

    const elementsWidthRef = useRef(0)

    useEffect(() => {
        elementsWidthRef.current =
            Array.from(slideRef.current?.children as HTMLCollection).reduce((width, elem) => {
                const index = + (elem.getAttribute('data-value') as string)
                if (index >= 0 && index < length) {
                    width += elem.getBoundingClientRect().width
                }
                return width
            }, 0)
    }, [])

    const onBack = () => {
        const value = getComputedStyle(slideRef.current as Element)
            .getPropertyValue('transform').split(', ')[4]

        console.log('current', current)
        console.log('value', value)

        if (transition === 'unset') {
            setTransition('0.4s all')
        }

        if (current === 0) {
            setCurrent(length)
            setTransition('unset')
            // transformRef.current = `translateX(-${value+elementsWidthRef.current}px)`
            return
        }

        setCurrent(current - 1)
    }

    const onForward = () => {
        const value = getComputedStyle(slideRef.current as Element)
            .getPropertyValue('transform').split(', ')[4]

        console.log('current', current)
        console.log('value', value)

        if (current === length - 1) {
            setCurrent(0)
            setTransition('unset')
            // transformRef.current = `translateX(-${value}px)`
            return
        }

        setCurrent(current + 1)
    }

    useEffect(() => {
        if (current === length) {
            setCurrent(length - 1)
            setTransition('0.4s all')
        }
    }, [current])

    const transformRef = useRef('')

    const transform = transformRef.current ? transformRef.current : `translateX(-${100 * (current)}%)`

    console.log('transform', transform)

    return {
        elements, length, slideRef, transition, onForward, onBack, current, perSlide, transform
    }
}

export default useSlider


// const onTransitionStart = (event: TransitionEvent) => {
//     if (event.target !== event.currentTarget) {
//         return
//     }
//     transitionRef.current.now = true
// }

// const onTransitionEnd = (event: TransitionEvent) => {
// if (event.target !== event.currentTarget) {
//     return
// }
// if (transitionRef.current.add !== null) {
//     setCurrent(transitionRef.current.add)
//     setTransition(0)
// }
// transitionRef.current.now = false
//     // moveRef.current.blocking = false
// }

// const elemWidth = useMemo(() => `(${100 / perSlide}% - ${(perSlide - 1) * 5 / perSlide}px)`, [perSlide])
// const indent = useMemo(() => perSlide === 1 ? '0px' : '5px', [perSlide])
//
// const moveRef = useRef<MoveRef>(
//     {startX: 0, moving: false, current: current, fast: false, clientX: 0, blocking: false}
// )
// const [moveState, setMoveState] = useState({translate: 0, moving: false})

// const onUp = useCallback((event: MouseEvent | TouchEvent) => {
// let clientX
// const mobileEvent = event as TouchEvent
// const descEvent = event as MouseEvent
// if (mobileEvent.changedTouches) {
//     clientX = mobileEvent.changedTouches[0].clientX
// } else {
//     event.preventDefault()
//     clientX = descEvent.clientX
// }
//
// const translate = moveRef.current.startX - clientX
// const width = slideRef.current?.children[0].getBoundingClientRect().width as number
//
// let toMove: number
// if (moveRef.current.fast) {
//     if (translate > 0) {
//         toMove = Math.ceil(translate / width)
//     } else {
//         toMove = Math.floor(translate / width)
//     }
// } else {
//     toMove = Math.round(translate / width)
// }
//
// let current = moveRef.current.current + toMove
//
// if (current < 0) {
//     if (perSlide > 1) {
//         current = 0
//     } else {
//         transitionRef.current.add = length - 1
//     }
// }
// if (current > length - perSlide) {
//     if (perSlide > 1) {
//         current = length - perSlide
//     } else transitionRef.current.add = 0
// }
//
// setMoveState({translate: 0, moving: false})
// setTransition(400)
//
// if (Math.abs(toMove) > 0 && !transitionRef.current.now) {
//     setCurrent(current)
// }
//
// document.removeEventListener('mousemove', onMove)
// document.removeEventListener('mouseup', onUp)
// document.removeEventListener('touchmove', onMove)
// document.removeEventListener('touchend', onUp)
// }, [])

// const onMove = useCallback((event: MouseEvent | TouchEvent) => {
// let clientX
// const mobileEvent = event as TouchEvent
// const descEvent = event as MouseEvent
//
// if (mobileEvent.touches) {
//     clientX = mobileEvent.touches[0].clientX
// } else {
//     clientX = descEvent.clientX
// }
//
// moveRef.current.blocking = true
//
// const translate = clientX - moveRef.current.startX
// moveRef.current.clientX = clientX
// setMoveState({translate, moving: true})

// }, [])

// const onBlock = useCallback((event: MouseEvent) => {
//      moveRef.current.blocking = true
//     setTimeout(() => moveRef.current.blocking=false)
//     document.removeEventListener('mouseup', onBlock)
// }, [])

// const onDown = useCallback((event: React.MouseEvent | React.TouchEvent) => {
// let clientX
// const mobileEvent = event as React.TouchEvent
// const descEvent = event as React.MouseEvent
//
// if (mobileEvent.touches) {
//     clientX = mobileEvent.touches[0].clientX
// } else {
//     clientX = descEvent.clientX
//     event.preventDefault()
// }
//
// if (transitionRef.current.now) {
//     document.addEventListener('mouseup', onBlock)
//     return
// }
//
// if (transitionRef.current.add !== null) {
//     transitionRef.current.add = null
// }
//
// moveRef.current.clientX = clientX
// moveRef.current.startX = clientX
// moveRef.current.fast = true
//
// setTimeout(() => {
//     moveRef.current.fast = false
// }, 200)
//
// setMoveState({translate: 0, moving: true})
// setTransition(0)
//
// document.addEventListener('mousemove', onMove)
// document.addEventListener('mouseup', onUp)
// document.addEventListener('touchmove', onMove)
// document.addEventListener('touchend', onUp)
// }, [])

// const onCapture = useCallback((event: React.MouseEvent) => {
// if (moveRef.current.blocking) {
//     event.preventDefault()
//     if (!transitionRef.current.now) {
//         moveRef.current.blocking = false
//     }
// }
// }, [])

// useEffect(() => {
//     moveRef.current.current = current
// }, [current])

// useEffect(() => {
//     slideRef.current?.addEventListener('transitionstart', onTransitionStart)
//     slideRef.current?.addEventListener('transitionend', onTransitionEnd)
//     return () => {
//         slideRef.current?.removeEventListener('transitionstart', onTransitionStart)
//         slideRef.current?.removeEventListener('transitionend', onTransitionEnd)
//     }
// }, [])