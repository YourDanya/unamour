import React, {RefObject, useRef, useState} from "react";

interface customRangeSliderProps {
    setState?: () => {}
}

const CustomRangeSlider: React.FC<customRangeSliderProps> = ({}) => {

    // const [sliderValue, setSliderValue] = useState(
    //     {
    //         value1: 0,
    //         value2: 100,
    //         z1: 10,
    //         z2: 1,
    //         center: 50,
    //         thumb1: '0',
    //         thumb2: '0',
    //         track2: '50%',
    //         track1: '50%',
    //     }
    // )
    //
    // const ref1 = useRef(null)
    // const ref2 = useRef(null)
    //
    //
    // const gradient1 = `linear-gradient(to right,
    //     #e0e0e0 ${Math.round((sliderValue.value1 / sliderValue.center) * 100)}%,
    //     black ${Math.round((sliderValue.value1 / sliderValue.center) * 100)}%)`
    //
    // const gradient2 = `linear-gradient(to right,
    //     red ${Math.round((sliderValue.value2 - sliderValue.center) / (100 - sliderValue.center) * 100)}%,
    //     #e0e0e0 ${Math.round((sliderValue.value2 - sliderValue.center) / (100 - sliderValue.center) * 100)}%)`
    //
    // const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     // setSliderValue({...sliderValue, [event.target.name]: event.target.value})
    //
    //     const value=  +event.target.value
    //
    //     const center =Math.round(+sliderValue.value1 + (sliderValue.value2 - sliderValue.value1) / 2)
    //
    //     if (event.target.name==='value1') {
    //         const center =Math.round(value + (sliderValue.value2 - value) / 2)
    //         const thumb1 = `calc(${value/center*100}%
    //                      - ${value/center*16}px)`
    //         const track1 = `${center}%`
    //         setSliderValue({...sliderValue, value1: value, center, thumb1, track1})
    //     }
    //     else {
    //         const center =Math.round(+sliderValue.value1 + (value - sliderValue.value1) / 2)
    //         const thumb2 = `calc(${(100-value)/(100-center) * 100}%
    //                     - ${(100-value)/(100-center) * 16}px)`
    //         const track2 = `${100 - center}%`
    //
    //         setSliderValue({...sliderValue, value2: value, center, thumb2, track2})
    //     }
    //
    // }


    const [state, setState] = useState({x: 0, left: 0, percent: 0})
    const stateRef = useRef(state)

    const handleMouseUp = () => {
        // console.log('mouse up')
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
    }

    function handleMouseMove(event: any) {
        // console.log('mouse move')
        console.log('\n')
        const getRect = (ref.current?.parentNode as Element).getBoundingClientRect()
        // start coordinate
        const start = getRect.x
        //width of track
        const trackWidth = getRect.width
        //current mouse x coordinate
        let x = event.clientX
        //width from start to current
        let left = (stateRef.current.left + (x - stateRef.current.x))

        console.log('left', stateRef.current.left)
        console.log('x prev', stateRef.current.x)
        console.log('x coming', event.clientX)

        // if mouse position less than 0
        if (left < 0) {
            if (x<start) x=start
            const stateObj = {x, left: 0, percent: 0}
            stateRef.current = stateObj
            setState(stateObj)
            return
        }
        // if mouse position more than trackWidth
        if (left > trackWidth - 16) {
            if (x> start + trackWidth) x = start + trackWidth
            const stateObj = {x, left: trackWidth - 16, percent: 100}
            stateRef.current = stateObj
            setState(stateObj)
            return
        }

        const percent = left / trackWidth * 100
        stateRef.current = {x, left, percent}
        setState({x, left, percent})
    }

    function handleMouseDown(event: any) {
        // console.log('mouse down')
        event.preventDefault()

        setState({...state, x: event.clientX})
        stateRef.current = {...stateRef.current, x: event.clientX}

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    const ref = useRef<HTMLDivElement>(null)

    return (
        <div className='range-slider'>
            <div className="range-slider__track"/>
            <div className="range-slider__thumb"
                 onMouseDown={handleMouseDown}
                 ref={ref}
                 style={{
                     // left: `calc(${state.percent}% -
                     // ${16*state.percent/100}px
                     // `,
                     transform: `translateY(-50%) translateX(${state.left}px)`
                 }}/>
            <div className="range-slider__thumb"
                 onMouseDown={handleMouseDown}
                 ref={ref}
                 style={{
                     // left: `calc(${state.percent}% -
                     // ${16*state.percent/100}px
                     // `,
                     transform: `translateY(-50%) translateX(${184}px)`
                 }}/>

            {/*<input type="range"*/}
            {/*       min="0"*/}
            {/*       ref={ref1}*/}
            {/*       max={sliderValue.center}*/}
            {/*       value={sliderValue.value1}*/}
            {/*       className="range-slider__input"*/}
            {/*       onChange={handleSliderChange}*/}
            {/*       name={'value1'}*/}
            {/*       style={{*/}
            {/*           background: gradient1,*/}
            {/*           zIndex: sliderValue.z1,*/}
            {/*           borderRadius: '5px 0 0 5px',*/}
            {/*           width: `${sliderValue.center}%`*/}
            {/*       }}*/}
            {/*/>*/}
            {/*<div className={'range-slider__thumb-wrapper'}*/}
            {/*    style={{*/}
            {/*    width: sliderValue.track1,*/}
            {/*}}>*/}
            {/*    <div className='range-slider__thumb'*/}
            {/*        style={{*/}
            {/*            left: sliderValue.thumb1*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<input type="range"*/}
            {/*       min={sliderValue.center}*/}
            {/*       max={"100"}*/}
            {/*       ref={ref2}*/}
            {/*       value={sliderValue.value2}*/}
            {/*       className="range-slider__input"*/}
            {/*       onChange={handleSliderChange}*/}
            {/*       name={'value2'}*/}
            {/*       style={{*/}
            {/*           background: gradient2,*/}
            {/*           right: 0,*/}
            {/*           zIndex: sliderValue.z2,*/}
            {/*           borderRadius: `0 5px 5px 0`,*/}
            {/*           width: `${100 - sliderValue.center}%`*/}
            {/*       }}*/}
            {/*/>*/}
            {/*<div className={'range-slider__thumb-wrapper'}*/}
            {/*     style={{*/}
            {/*         right: 0,*/}
            {/*         width: sliderValue.track2,*/}
            {/*     }}>*/}
            {/*    <div className='range-slider__thumb'*/}
            {/*        style={{*/}
            {/*            right: sliderValue.thumb2*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</div>*/}

        </div>
    )
}

export default CustomRangeSlider