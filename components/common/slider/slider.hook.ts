import {useEffect, useRef, useState} from "react"
import {SliderProps} from "./slider.component"

const useSlider = (props: SliderProps) => {

    const {elements, current} = props
    
    let [count, setCount] = useState(current ?? 0)
    const length = elements.length
    const slideRef = useRef<HTMLDivElement>(null)
    const transitionRef = useRef<{ now: boolean, add: null | number }>({now: false, add: null})
    const [transition, setTransition] = useState(400) 
    
    const handleForwardClick = () => {
        if (transitionRef.current.now) return
        setCount(count + 1)
        if (count === length - 1) {
            transitionRef.current.add = 0
        }
    }
    
    const handleBackClick = () => {
        if (transitionRef.current.now) return
        setCount(count - 1)
        if (count === 0) {
            transitionRef.current.add = length - 1
        }
    }
    
    const handleTransitionStart = () => {
        console.log('transition start')
        transitionRef.current.now = true
    }
    
    const handleTransitionEnd = () => {
        console.log('transition end')
        if (transitionRef.current.add!==null) {
            setCount(transitionRef.current.add)
            setTransition(0)
            transitionRef.current.add = null
        }
        transitionRef.current.now = false
    }
    
    useEffect(() => {
        if (transition === 0) {
            setTransition(400)
        }
    }, [transition])
    
    useEffect(() => {
        slideRef.current?.addEventListener('transitionstart', handleTransitionStart)
        slideRef.current?.addEventListener('transitionend', handleTransitionEnd)
        return () => {
            slideRef.current?.removeEventListener('transitionstart', handleTransitionStart)
            slideRef.current?.removeEventListener('transitionend', handleTransitionEnd)
        }
    }, [])
    
    return {...props, slideRef, count, transition,  handleForwardClick, handleBackClick}
}

export default useSlider