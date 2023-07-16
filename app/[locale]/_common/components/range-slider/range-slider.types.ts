import {MutableRefObject} from 'react'

export type SliderStateRef = {
    min: {
        diff: number
    },
    max: {
        diff: number
    },
    active: 'min' | 'max' | 'none',
    limit: {left: boolean, right: boolean}
}

export type RangeSliderProps = {
    onChange: (values: {min: number, max: number}) => void,
    onMouseUp?: () => void,
    onMouseDown?: () => void,
    values: {min: number, max: number},
    valuesRef: MutableRefObject<{ min: number, max: number}>
    defMin: number,
    defMax: number
}