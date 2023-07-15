'use client'

import useRangeSlider from './range-slider.hook'
import {RangeSliderProps} from 'app/[locale]/_common/components/range-slider/range-slider.types'
import {FC} from 'react'

const RangeSlider: FC<RangeSliderProps> = (props) => {
    const {elemsRef, handleTrackDown, handleThumbDown, gradient, leftWidth, rightWidth} = useRangeSlider(props)

    return (
        <div className="range-slider">
            <div
                className="range-slider__track"
                ref={elem => elemsRef.current.track = elem}
                onMouseDown={handleTrackDown}
                onTouchStart={handleTrackDown}
                style={{background: gradient}}
            />
            <button
                className="range-slider__thumb"
                name={'min'}
                onMouseDown={handleThumbDown}
                onTouchStart={handleThumbDown}
                ref={elem => elemsRef.current.min = elem}
                style={{
                    left: leftWidth
                    // zIndex: state.left.zIndex
                }}
            />
            <button
                className="range-slider__thumb"
                name={'max'}
                onMouseDown={handleThumbDown}
                onTouchStart={handleThumbDown}
                ref={elem => elemsRef.current.max = elem}
                style={{
                    left: rightWidth
                    // zIndex: state.right.zIndex,
                }}
            />
        </div>
    )
}

export default RangeSlider