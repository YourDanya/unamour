import React, {ReactNode} from "react";
import useSlider from "./slider.hook";
import {count} from "rxjs";

export type SliderProps = {
    elements: ReactNode[],
    current?: number
}

const Slider: React.FC<SliderProps> = (props) => {

    const {elements, slideRef, count, transition,  handleForwardClick, handleBackClick} = useSlider(props)

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

export default Slider