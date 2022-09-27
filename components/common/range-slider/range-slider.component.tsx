import React from 'react'
import useRangeSlider from './range-slider.hook'

export type RangeSliderProps = {
    setValues: (values: {min: string, max: string}) => void,
    values: {min: string, max: string},
    defMin: number,
    defMax: number
}

const RangeSlider: React.FC<RangeSliderProps> = (props) => {

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