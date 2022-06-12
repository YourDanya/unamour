import React, {useRef, useState} from "react";

interface customRangeSliderProps {
    setState? : () => {}
}

const CustomRangeSlider: React.FC<customRangeSliderProps> = ({setState}) => {

    const [sliderValue, setSliderValue] = useState(
        {
            value1: 0,
            value2: 100,
            z1: 10,
            z2: 1,
            center: 50,
            thumb1: '0',
            thumb2: '0',
            track2: '50%',
            track1: '50%',
        }
    )

    const ref1 = useRef(null)
    const ref2 = useRef(null)

    console.log('\n')
    console.log('value1', sliderValue.value1)
    console.log('value2', sliderValue.value2)
    console.log('slider center', sliderValue.center)

    const gradient1 = `linear-gradient(to right, 
        #e0e0e0 ${Math.round((sliderValue.value1 / sliderValue.center) * 100)}%,
        black ${Math.round((sliderValue.value1 / sliderValue.center) * 100)}%)`

    const gradient2 = `linear-gradient(to right,
        red ${Math.round((sliderValue.value2 - sliderValue.center) / (100 - sliderValue.center) * 100)}%,
        #e0e0e0 ${Math.round((sliderValue.value2 - sliderValue.center) / (100 - sliderValue.center) * 100)}%)`

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setSliderValue({...sliderValue, [event.target.name]: event.target.value})

        const value=  +event.target.value
        
        const center =Math.round(+sliderValue.value1 + (sliderValue.value2 - sliderValue.value1) / 2)

        if (event.target.name==='value1') {
            const center =Math.round(value + (sliderValue.value2 - value) / 2)
            const thumb1 = `calc(${value/center*100}%
                         - ${value/center*16}px)`
            const track1 = `${center}%`
            setSliderValue({...sliderValue, value1: value, center, thumb1, track1})
        }
        else {
            const center =Math.round(+sliderValue.value1 + (value - sliderValue.value1) / 2)
            const thumb2 = `calc(${(100-value)/(100-center) * 100}%
                        - ${(100-value)/(100-center) * 16}px)`
            const track2 = `${100 - center}%`

            setSliderValue({...sliderValue, value2: value, center, thumb2, track2})
        }

    }

    return (
        <div className='range-slider'>
            <input type="range"
                   min="0"
                   ref={ref1}
                   max={sliderValue.center}
                   value={sliderValue.value1}
                   className="range-slider__input"
                   onChange={handleSliderChange}
                   name={'value1'}
                   style={{
                       background: gradient1,
                       zIndex: sliderValue.z1,
                       borderRadius: '5px 0 0 5px',
                       width: `${sliderValue.center}%`
                   }}
            />
            <div className={'range-slider__thumb-wrapper'}
                style={{
                width: sliderValue.track1,
            }}>
                <div className='range-slider__thumb'
                    style={{
                        left: sliderValue.thumb1
                    }}
                />
            </div>
            <input type="range"
                   min={sliderValue.center}
                   max={"100"}
                   ref={ref2}
                   value={sliderValue.value2}
                   className="range-slider__input"
                   onChange={handleSliderChange}
                   name={'value2'}
                   style={{
                       background: gradient2,
                       right: 0,
                       zIndex: sliderValue.z2,
                       borderRadius: `0 5px 5px 0`,
                       width: `${100 - sliderValue.center}%`
                   }}
            />
            <div className={'range-slider__thumb-wrapper'}
                 style={{
                     right: 0,
                     width: sliderValue.track2,
                 }}>
                <div className='range-slider__thumb'
                    style={{
                        right: sliderValue.thumb2
                    }}
                />
            </div>
        </div>
    )
}

export default CustomRangeSlider