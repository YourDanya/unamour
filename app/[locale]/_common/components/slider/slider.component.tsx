'use client'

import {FC} from 'react'
import {SliderProps} from 'app/[locale]/_common/components/slider/slider.types'
import useSlider from 'app/[locale]/_common/components/slider/slider.hook'

const Slider: FC<SliderProps> = (props) => {
    const {
        perSlide, elements, slideRef, length, current, transition, onForward, onBack, elemWidth, indent, onDown,
        moveState, className, onCapture
    } = useSlider(props)

    return (
        <div className={`slider ${className ?? ''} ${perSlide !== 1 ? 'slider--multiple' : ''}`}>
            <button
                className={`slider__arrow slider__back 
                ${current === 0 ? 'slider__arrow--inactive' : ''}`}
                onClick={onBack}
            />
            <button
                className={`slider__arrow slider__forward 
                ${current === length - (perSlide) ? 'slider__arrow--inactive' : ''}`}
                onClick={onForward}
            />
            <div
                className={'slider__track'}
                style={{
                    transform: `translateX(calc((${elemWidth} + ${indent}) * ${-current} + ${moveState.translate}px))`,
                    transition: `${transition / 1000}s all`
                }}
                ref={slideRef}
                onMouseDown={onDown}
                onTouchStart={onDown}
                onClickCapture={onCapture}
            >
                {perSlide === 1 && (
                    <>
                        <div className={'slider__element'} style={{left: `calc(${elemWidth} * -2)`}}>
                            {elements[length - 2]}
                        </div>
                        <div className={'slider__element'} style={{left: `calc(${elemWidth} * -1)`}}>
                            {elements[length - 1]}
                        </div>
                        <div className={'slider__element'} style={{left: `calc(${elemWidth} * ${length})`}}>
                            {elements[0]}
                        </div>
                        <div className={'slider__element'} style={{left: `calc(${elemWidth} * ${length + 1})`}}>
                            {elements[1]}
                        </div>
                    </>
                )}
                {elements.map((element, index) =>
                    <div
                        className={'slider__element'}
                        key={index}
                        style={{
                            left: `calc((${elemWidth} + ${indent}) * ${index})`,
                            width: `calc(${elemWidth})`,
                        }}
                    >
                        {element}
                    </div>
                )}
                <div className={'slider__element slider__element--hidden'} style={{width: `calc(${elemWidth})`}}>
                    {elements[0]}
                </div>
            </div>
        </div>
    )
}

export default Slider