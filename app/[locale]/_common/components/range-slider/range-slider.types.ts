import {MutableRefObject} from 'react'

export type SliderStateRef = {
    min: {
        x: number,
        translate: number,
        limit: boolean,
        diff: number,
        // zIndex: number
    },
    max: {
        x: number,
        translate: number,
        limit: boolean,
        diff: number,
        // zIndex: number
    },
    active: 'min' | 'max' | 'none',
    limit: {left: boolean, right: boolean}
}

export type SliderState = {
    left: {
        translate: number,
        zIndex: number
    },
    right: {
        translate: number
        zIndex: number
    },
    // gradient: string
}

export type RangeSliderProps = {
    onChange: (values: {min: string, max: string}) => void,
    values: {min: string, max: string},
    valuesRef: MutableRefObject<{ min: string, max: string}>
    defMin: number,
    defMax: number
}