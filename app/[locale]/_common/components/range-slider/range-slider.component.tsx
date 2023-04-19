'use client'

import useRangeSlider from './range-slider.hook'
import {RangeSliderProps} from 'app/[locale]/_common/components/range-slider/range-slider.types'
import {FC} from 'react'
import 'app/[locale]/_common/components/range-slider/range-slider.styles.sass'

const RangeSlider: FC<RangeSliderProps> = (props) => {
    const {elemsRef, handleTrackDown, handleThumbDown, state} = useRangeSlider(props)

    return (
        <div className='range-slider'>
            <div
                className="range-slider__track"
                ref={elem => elemsRef.current.track = elem}
                onMouseDown={handleTrackDown}
                onTouchStart={handleTrackDown}
                style={{background: `linear-gradient(${state.gradient})`}}
            />
            <button
                className="range-slider__thumb"
                name={'left'}
                onMouseDown={handleThumbDown}
                onTouchStart={handleThumbDown}
                ref={elem => elemsRef.current.left = elem}
                style={{
                    zIndex: state.left.zIndex,
                    transform: `translateY(-50%) translateX(${state.left.translate}px)`
                }}
            />
            <button
                className="range-slider__thumb"
                name={'right'}
                onMouseDown={handleThumbDown}
                onTouchStart={handleThumbDown}
                ref={elem => elemsRef.current.right = elem}
                style={{
                    zIndex: state.right.zIndex,
                    transform: `translateY(-50%) translateX(${state.right.translate}px)`
                }}
            />
        </div>
    )
}

export default RangeSlider