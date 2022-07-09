import React, {ReactNode, useEffect, useRef, useState} from "react";

type customSliderProps = {
    elements: ReactNode[],
    current?: number
}

const CustomSlider: React.FC<customSliderProps> = ({elements, current}) => {

    let [count, setCount] = useState(current ?? 0)

    const length = elements.length

    const setCountBy = (count: number) => {
        setCount(count)
    }

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

    useEffect(() => {
        if (transition === 0) {
            setTransition(400)
        }
    }, [transition])

    const slideRef = useRef<HTMLDivElement>(null)

    const transitionRef = useRef<{ now: boolean, add: null | number }>({now: false, add: null})

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
        slideRef.current?.addEventListener('transitionstart', handleTransitionStart)
        slideRef.current?.addEventListener('transitionend', handleTransitionEnd)
        return () => {
            slideRef.current?.removeEventListener('transitionstart', handleTransitionStart)
            slideRef.current?.removeEventListener('transitionend', handleTransitionEnd)
        }
    }, [])

    return (
        <div className={'slider'}>
            <button className={'slider__button slider__back'} onClick={handleBackClick}>
                <div className={'slider__arrow slider__arrow--back'}/>
            </button>
            <div className={'slider__track'}
                 style={{
                     transform: `translateX(${-100 * count}%)`,
                     transition: `${transition / 1000}s all`
                 }}
                 ref={slideRef}>
                <div className={'slider__element'} style={{left: `${100 * -2}%`}}>{elements[length - 2]}</div>
                <div className={'slider__element'} style={{left: `${100 * -1}%`}}>{elements[length - 1]}</div>
                {elements.map((element, index) =>
                    <div className={'slider__element'} key={index} style={{left: `${100 * index}%`}}>
                        {element}
                    </div>
                )}
                <div className={'slider__element'} style={{left: `${100 * length}%`}}>{elements[0]}</div>
                <div className={'slider__element'} style={{left: `${100 * (length + 1)}%`}}>{elements[1]}</div>

                <div className={'slider__element slider__element--hidden'}>{elements[0]}</div>
            </div>
            <button className={'slider__button slider__forward'} onClick={handleForwardClick}>
                <div className={'slider__arrow slider__arrow--forward'}/>
            </button>
        </div>
    )
}

export default CustomSlider