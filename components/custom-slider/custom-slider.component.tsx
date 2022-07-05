import React, {ReactNode, useEffect, useRef, useState} from "react";

type customSliderProps = {
    elements: ReactNode[],
    current: number
}

const CustomSlider: React.FC<customSliderProps> = ({elements, current}) => {

    let [count, setCount] = useState(current)

    const setCountBy = (count: number) => {
        setCount(count)
    }

    const handleForwardClick = () => {
        if (count===elements.length-1) {
            setCount(0)
        }
        else {
            setCount(count + 1)
        }
    }

    const handleBackClick = () => {
        if (count===0) {
            setCount(elements.length-1)
        } else {
            setCount(count - 1)
        }

    }

    const handleButtonClick = () => {

    }

    return (
        <div className={'slider'}>
            <button className={'slider__button slider__back'} onClick={handleBackClick}>
                <div className={'slider__arrow slider__arrow--back'}/>
            </button>
            <div className={'slider__track'} style={{
                transform: `translateX(${-100 * count}%)`
            }}>
                {elements.map((element, index) =>
                    <div className={'slider__element'} key={index} style={{left: `${100 * index}%`}}>
                        {element}
                    </div>
                )}
                <div className={'slider__element slider__element--hidden'}>
                    {elements[0]}
                </div>
            </div>
            <button className={'slider__button slider__forward'} onClick={handleForwardClick}>
                <div className={'slider__arrow slider__arrow--forward'}/>
            </button>
        </div>
    )
}

export default CustomSlider