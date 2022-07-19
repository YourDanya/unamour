import React, {useRef, useState} from "react"

type RangeSliderProps = {
    setState?: () => {}
}

type SliderState = {
    left: {
        x: number,
        translate: number,
        limit: boolean,
        diff: number
    },
    right: {
        x: number,
        translate: number,
        limit: boolean,
        diff: number
    },
    active: 'left' | 'right' | 'none'
}

const RangeSlider: React.FC<RangeSliderProps> = ({}) => {

    const [state, setState] = useState<SliderState>({
        left: {x: 0, translate: 0, limit: false, diff: 0},
        right: {x: 0, translate: 184, limit: false, diff: 0},
        active: 'none'
    })

    const stateRef = useRef(state)

    const elemsRef = useRef<{ left: HTMLButtonElement | null, right: HTMLButtonElement | null, track: HTMLDivElement | null }>({
        left: null,
        right: null,
        track: null
    })

    const handleMouseUp = () => {
        console.log('mouse up')
        stateRef.current.active = 'none'
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (event: MouseEvent) => {
        console.log('\nmouse move')

        const active = stateRef.current.active as 'left' | 'right'
        const getRect = (elemsRef.current.track as Element).getBoundingClientRect()
        // start coordinate
        const start = getRect.x
        //current mouse x coordinate
        const x = event.clientX
        //width from start to current
        const translate = (stateRef.current[active].translate + (x - stateRef.current[active].x))
        //width of track
        const trackWidth = getRect.width

        //if moving first thumb
        if (active === 'left') {
            const {left} = stateRef.current
            // if mouse position less than 0
            if (translate <= 0) {
                if (!stateRef.current.left.limit) {
                    stateRef.current.left = {...left, translate: 0, limit: true, x: start + left.diff}
                    setState({...stateRef.current})
                }
                return
            }
            // if mouse position more than second thumb
            const rightTranslate = stateRef.current.right.translate
            if (translate >= rightTranslate) {
                if (!stateRef.current.left.limit) {
                    stateRef.current.left = {
                        ...left,
                        translate: rightTranslate,
                        limit: true,
                        x: rightTranslate + start + left.diff
                    }
                    setState({...stateRef.current})
                }
                return
            }
            stateRef.current.left = {...left, x, translate, limit: false}
            setState({...stateRef.current})
        }
        // if moving second thumb
        else {
            const {right} = stateRef.current
            //if mouse position more than 
            if (translate >= trackWidth - 16) {
                if (!stateRef.current.right.limit) {
                    stateRef.current.right = {...right, translate: trackWidth - 16, limit: true, x: start+trackWidth - 16 + right.diff}
                    setState({...stateRef.current})
                }
                return
            }

            stateRef.current.right = {...right, x, translate, limit: false}
            setState({...stateRef.current})
        }
    }

    const handleMouseDown = (event: React.MouseEvent) => {
        console.log('mouse down')

        event.preventDefault()
        const {name} = event.target as HTMLButtonElement
        const active = name as 'left' | 'right'

        stateRef.current.active = active
        const thumbX = elemsRef.current[active]?.getBoundingClientRect().x as number
        stateRef.current[active].diff = event.clientX - thumbX
        stateRef.current[active].x = event.clientX

        setState({...stateRef.current})
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    return (
        <div className='range-slider'>
            <div className="range-slider__track" ref={elem => elemsRef.current.track = elem}/>
            <button
                className="range-slider__thumb"
                name={'left'}
                onMouseDown={handleMouseDown}
                ref={elem => elemsRef.current.left = elem}
                style={{
                    zIndex: 10,
                    transform: `translateY(-50%) translateX(${state.left.translate}px)`
                }}
            />
            <button
                className="range-slider__thumb"
                name={'right'}
                onMouseDown={handleMouseDown}
                ref={elem => elemsRef.current.right = elem}
                style={{
                    zIndex: 1,
                    transform: `translateY(-50%) translateX(${state.right.translate}px)`
                }}
            />
        </div>
    )
}

export default RangeSlider