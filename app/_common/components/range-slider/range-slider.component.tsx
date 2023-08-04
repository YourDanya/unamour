'use client'

import useRangeSlider from './range-slider.hook'
import {RangeSliderProps} from 'app/_common/components/range-slider/range-slider.types'
import {FC} from 'react'

const RangeSlider: FC<RangeSliderProps> = (props) => {
    const {className} = props

    const {
        elemsRef, onTrackDown, onThumbDown, gradient, leftWidth, rightWidth, leftPercent, rightPercent
    } = useRangeSlider(props)

    return (
        <div className={`range-slider ${className ?? ''}`}>
            <div
                className="range-slider__track"
                ref={elem => elemsRef.current.track = elem}
                onMouseDown={onTrackDown}
                onTouchStart={onTrackDown}
                style={{background: gradient}}
            />
            <button
                className="range-slider__thumb"
                name={'min'}
                onMouseDown={onThumbDown}
                onTouchStart={onThumbDown}
                ref={elem => elemsRef.current.min = elem}
                style={{
                    left: leftWidth
                }}
            />
            <button
                className="range-slider__thumb"
                name={'max'}
                onMouseDown={onThumbDown}
                onTouchStart={onThumbDown}
                ref={elem => elemsRef.current.max = elem}
                style={{
                    left: rightWidth
                }}
            />
        </div>
    )
}

export default RangeSlider