'use client'

import {FC} from 'react'
import {SliderProps} from 'app/_common/components/slider/slider.types'
import useDebounce from 'app/_common/hooks/helpers/debounce/debounce.hook'
import useSlider from 'app/_common/components/slider/slider.hook'
import {useGetState} from 'app/_common/components/slider/slider.hook'
import Arrow from 'app/_common/components/arrow/arrow.component'
import Button from 'app/_common/components/button/button.component'

const Slider: FC<SliderProps> = (props) => {
    const {className, container} = props

    const state = useSlider(props)
    const {perSlide} = state

    return (
        <div
            className={`slider-v2 slider ${className ?? ''} ${container ? 'slider-container' : ''}`}
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
            <Button
                className={`slider__button slider__back ${current === 0 ? 'slider__arrow--inactive' : ''}`}
                onClick={onBack}
            >
                <Arrow className={'slider__arrow'} width={20} type={'left'}/>
            </Button>
            <Button
                className={`slider__button slider__forward ${current === length - (perSlide) ?
                    'slider__arrow--inactive' : ''}`}
                onClick={onForward}
            >
                <Arrow className={'slider__arrow'} width={20} type={'right'}/>
            </Button>
        </div>
    )
}

const Content = (props: ReturnType<typeof useSlider>) => {
    const {slideRef, onDown, mounted, contentStyle, transform, props: {infinite}, onCapture} = props

    return (
        <div
            className={`slider-track ${mounted ? 'slider--mounted' : ''}`}
            style={{...contentStyle}}
            ref={slideRef}
            onMouseDown={onDown}
            onTouchStart={onDown}
            onClickCapture={onCapture}
        >
            {mounted && (<Elements {...props}/>)}
            {!mounted && (<PreviewElements {...props}/>)}
        </div>
    )
}

const Elements = (props: ReturnType<typeof useSlider>) => {
    const {transform, transition, props: {infinite}, resizing} = props

    return (
        <div className={'slider-elements'} style={{transform, transition}}>
            {infinite && !resizing && (<LeftHidden {...props}/>)}
            <Featured {...props}/>
            {infinite && (<RightHidden {...props}/>)}
        </div>
    )
}

const PreviewElements = (props: ReturnType<typeof useSlider>) => {
    const {current, perSlide, elements, props: {infinite}, slideStyles} = props

    const arr = []
    let i = current

    while (arr.length < perSlide) {
        if (i === elements.length && infinite) {
            i = 0
        }
        if (i === elements.length && !infinite) {
            break
        }
        arr.push(elements[i])
        i++
    }

    return (
        <div className={'slider-elements'}>
            {arr.map((childElement, index) => (
                <div className={'slider-element'} key={index} style={slideStyles}>
                    {childElement}
                </div>
            ))}
        </div>
    )
}

const Featured = (props: ReturnType<typeof useSlider>) => {
    const {elements, current, length, elemsRef, slideStyles, resizing} = props

    return (<>
        {elements.map((childElement, index) => (
            <div
                className={`slider-element ${index === 0 ? 'slider-element--first' : ''}
                                ${index === current ? 'slider-element--current' : ''}
                                ${index === length - 1 ? 'slider-element--last' : ''}
                                ${resizing && index < current ? 'slider-element--resizing-hidden' : ''}
                                `}
                key={index}
                data-value={index}
                style={slideStyles}
                ref={(elem) => elemsRef.current[index] = elem}
            >
                {childElement}
            </div>
        ))}
    </>)
}

const LeftHidden = (state: ReturnType<typeof useSlider>) => {
    const {elements, leftElemsRef, slideStyles} = state

    const leftElements = []
    let leftCount = elements.length - 1

    for (let i = 4; i >= 0; i--) {
        leftElements[i] = {elem: elements[leftCount], index: leftCount}
        leftCount--
        if (leftCount === -1) {
            leftCount = elements.length - 1
        }
    }

    return (<>
        {leftElements.map(({elem, index: dataIndex}, index) => (
            <div
                className={`slider-element`}
                style={slideStyles}
                key={index}
                data-index={dataIndex}
                ref={(elem) => leftElemsRef.current[index] = elem}
            >
                {elem}
            </div>
        ))}
    </>)
}

const RightHidden = (state: ReturnType<typeof useSlider>) => {
    const {elements, rightElemsRef, elemsRef, slideStyles} = state

    const rightElements = []
    let rightCount = 0

    while (rightElements.length !== 5) {
        rightElements.push({elem: elements[rightCount], dataIndex: rightCount})
        rightCount++
        if (rightCount === elements.length) {
            rightCount = 0
        }
    }

    return (<>
        {rightElements.map(({elem, dataIndex}, index) => (
            <div
                style={slideStyles}
                className={`slider-element`}
                key={index}
                data-index={dataIndex}
                ref={(elem) => rightElemsRef.current[index] = elem}
            >
                {elem}
            </div>
        ))}
    </>)
}
