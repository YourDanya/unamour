'use client'

import {FC, Fragment} from 'react'
import {SliderProps} from 'app/[locale]/_common/components/slider/slider.types'
import useSlider from 'app/[locale]/_common/components/slider/slider-v2.hook'
import {useDebounce} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'

const SliderComponent: FC<SliderProps> = (props) => {
    const {className} = props

    const {
        perSlide, elements, slideRef, length, current, transition, onForward, onBack, transform, onDown, setTransform,
        height
    } = useSlider(props)

    return (
        <div
            className={`slider-v2 ${className ?? ''} ${perSlide !== 1 ? 'slider-v2--multiple' : ''}`}
            // style={{height: height}}
        >
            <button
                className={`slider-v2__arrow slider-v2__back ${current === 0 ? 'slider-v2__arrow--inactive' : ''}`}
                onClick={onBack}
            >
                <div className='arrow-back'/>
            </button>
            <div className={'slider-v2__content'}>
                <div
                    className={'slider-v2__track'}
                    style={{transform, transition}}
                    ref={slideRef}
                    onMouseDown={onDown}
                    onTouchStart={onDown}
                    // onClickCapture={onCapture}
                >
                    {[-1, 0, 1].map(count => (
                        <Fragment key={count}>
                            {elements.map((childElement, index) => (
                                <div
                                    className={`slider-v2__element ${index === 0 ? 'slider-v2__element--first' : ''}
                                ${index === current? 'slider-v2__element--current' : ''}
                                ${index === length - 1 ? 'slider-v2__element--last' : ''}`}
                                    key={count * length + index}
                                    data-value={count * length + index}
                                >
                                    {childElement}
                                </div>
                            ))}
                        </Fragment>
                    ))}
                </div>
            </div>
            <button
                className={`slider-v2__arrow slider-v2__forward ${current === length - (perSlide) ?
                    'slider-v2__arrow--inactive' : ''}`}
                onClick={onForward}
            >
                <div className={'arrow-forward'}/>
            </button>
        </div>
    )
}

export default SliderComponent

{/*{transform}*/}
{/*<input*/}
{/*    className={'slider-v2__input'}*/}
{/*    onChange={debounced}*/}
{/*/>*/}