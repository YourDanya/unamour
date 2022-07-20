import React, {useRef, useState} from "react"
import useRangeSlider from "./range-slider.hook";

export type RangeSliderProps = {
    setValues?: () => {}
}

const RangeSlider: React.FC<RangeSliderProps> = (props) => {
    const {elemsRef, handleTrackDown, handleThumbDown, state} = useRangeSlider(props)

    return (
        <div className='range-slider'>
            <div
                className="range-slider__track"
                ref={elem => elemsRef.current.track = elem}
                onMouseDown={handleTrackDown}
                style={{background: `linear-gradient(${state.gradient})`}}
            />
            <button
                className="range-slider__thumb"
                name={'left'}
                onMouseDown={handleThumbDown}
                ref={elem => elemsRef.current.left = elem}
                style={{
                    transform: `translateY(-50%) translateX(${state.left.translate}px)`
                }}
            />
            <button
                className="range-slider__thumb"
                name={'right'}
                onMouseDown={handleThumbDown}
                ref={elem => elemsRef.current.right = elem}
                style={{
                    transform: `translateY(-50%) translateX(${state.right.translate}px)`
                }}
            />
        </div>
    )
}

export default RangeSlider