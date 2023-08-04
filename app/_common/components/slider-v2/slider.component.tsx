'use client'

import {FC} from 'react'
import {SliderProps} from 'app/_common/components/slider/slider.types'
import useDebounce from 'app/_common/hooks/helpers/debounce/debounce.hook'
import useSlider from 'app/_common/components/slider-v2/slider.hook'
import {useGetState} from 'app/_common/components/slider-v2/slider.hook'

const Slider: FC<SliderProps> = (props) => {
    const {className} = props

    const state = useSlider(props)

    const {perSlide} = state

    return (
        <div
            className={`slider-v2 slider ${className ?? ''} ${perSlide !== 1 ? 'slider--multiple' : ''}`}
        >
            <Arrows {...state}/>
            <Content {...state}/>
        </div>
    )
}

export default Slider

const Arrows = (props: ReturnType<typeof useSlider>) => {
    const {current, onBack, onForward, perSlide, length} = props

    return (
        <div className={'slider-arrows slider'}>
            <button
                className={`slider__arrow slider__back ${current === 0 ? 'slider__arrow--inactive' : ''}`}
                onClick={onBack}
            >
                <div className="arrow-back"/>
            </button>
            <button
                className={`slider__arrow slider__forward ${current === length - (perSlide) ?
                    'slider__arrow--inactive' : ''}`}
                onClick={onForward}
            >
                <div className={'arrow-forward'}/>
            </button>
        </div>
    )
}

const Content = (props: ReturnType<typeof useSlider>) => {
    const {slideRef, onDown, mounted, contentStyle, transform} = props

    return (
        <div
            className={`slider-track ${mounted ? 'slider--mounted' : ''}`}
            style={{...contentStyle}}
            ref={slideRef}
            onMouseDown={onDown}
            onTouchStart={onDown}
        >
            <Elements {...props}/>
        </div>
    )
}

const Elements = (props: ReturnType<typeof useSlider>) => {
    const {elements, current, length, elemsRef, props: {infinite}, transform, transition} = props

    return (
        <div className={'slider-elements'} style={{transform, transition}}>
            {/*{infinite && (<LeftHidden {...props}/>)}*/}
            {elements.map((childElement, index) => (
                <div
                    className={`slider-element ${index === 0 ? 'slider-element--first' : ''}
                                ${index === current ? 'slider-element--current' : ''}
                                ${index === length - 1 ? 'slider-element--last' : ''}`}
                    key={index}
                    data-value={index}
                    ref={(elem) => elemsRef.current[index] = elem}
                >
                    {childElement}
                </div>
            ))}
            {/*{infinite && (<RightHidden {...props}/>)}*/}
        </div>
    )
}

const LeftHidden = (state: ReturnType<typeof useSlider>) => {
    const {elements} = state

    const leftElements = []
    let leftCount = elements.length - 1

    while (leftElements.length !== 5) {
        leftElements.push(elements[leftCount])
        leftCount--
        if (leftCount === -1) {
            leftCount = elements.length - 1
        }
    }

    return (
        <div className={'slider-left slider'}>
            {leftElements.map((childElement, index) => (
                <div
                    className={`slider-element`}
                    key={index}
                >
                    {childElement}
                </div>
            ))}
        </div>
    )
}

const RightHidden = (state: ReturnType<typeof useSlider>) => {
    const {elements} = state

    const rightElements = []
    let rightCount = 0

    while (rightElements.length !== 5) {
        rightElements.push(elements[rightCount])
        rightCount++
        if (rightCount === elements.length) {
            rightCount = 0
        }
    }

    return (
        <div className={'slider-right slider'}>
            {rightElements.map((childElement, index) => (
                <div
                    className={`slider-element`}
                    key={index}
                >
                    {childElement}
                </div>
            ))}
        </div>
    )
}