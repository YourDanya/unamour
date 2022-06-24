import React, {ReactNode, useEffect, useRef, useState} from "react";
import {element} from "prop-types";
import {sleep} from "../../utils/main-utils";

type customSliderProps = {
    elements: ReactNode[]
}

const CustomSlider: React.FC<customSliderProps> = ({elements}) => {

    let [count, setCount] = useState(0)

    const size = elements.length

    let [transition, setTransition] = useState('0.5 s all')

    const ref = useRef(0)

    const [arr, setArr] = useState(elements)

    const handleForwardClick = () => {
        setCount(count + 1)
        if (count > size- 2) {
            setCount(count + 1 - size)
        }
    }

    const setCountBy = (count: number) => {
        setCount(count)
    }

    const handleBackClick = async () => {
        setCount(count - 1)
        if (count < 1) {
            setCount(count - 1 + size)
        }
    }

    // console.log('\nrender')
    // console.log('count', count)
    // console.log('transition', transition)

    return (
        <div className={'slider'}>
            <button className={'slider__button slider__back'} onClick={handleBackClick}>
                <div className={'slider__arrow slider__arrow--back'}/>
            </button>
            <div className={'slider__track'} style={{
                transform: `translateX(${-100 * count}%)`,
                transition: transition
            }}>
                <div className={'slider__element'} style={{left: `${-200}%`}}>{elements[size - 2]}</div>
                <div className={'slider__element'} style={{left: `${-100}%`}}>{elements[size - 1]}</div>
                {arr.map((element, index) =>
                    <div className={'slider__element'} key={index} style={{left: `${100 * index}%`}}>
                        {element}
                    </div>
                )}
                <div className={'slider__element'}
                     style={{transform: `translateX(-${100 * size}%)`}}>{elements[0]}</div>
                <div className={'slider__element'}
                     style={{transform: `translateX(-${100 * size + 1}%)`}}>{elements[1]}</div>
            </div>
            <button className={'slider__button slider__forward'} onClick={handleForwardClick}>
                <div className={'slider__arrow slider__arrow--forward'}/>
            </button>
        </div>
    )
}

export default CustomSlider