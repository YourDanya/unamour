import {CSSProperties} from 'react'
import {useGetState} from 'app/_common/components/slider-v2/slider.hook'

export const useCalcDimensions = (state: ReturnType<typeof useGetState>) => {
    const {elemsRef, current, length} = state

    let transform, rect, translate, contentStyle: CSSProperties = {}

    const {left: start} = (elemsRef.current[0] as HTMLDivElement)?.getBoundingClientRect() ?? {}

    let elem = elemsRef.current[current]

    if (elem) {
        rect = (elem as HTMLDivElement).getBoundingClientRect()
        translate = start - rect.left

        contentStyle.width = `${rect.width}px`
        contentStyle.height = `${rect.height}px`
        translate = `${translate}px`
    }

    elem = elemsRef.current[-current]

    if (current < 0 && elem) {
        rect = (elem as HTMLDivElement).getBoundingClientRect()
        translate = rect.left - start

        contentStyle.width = `${rect.width}px`
        contentStyle.height = `${rect.height}px`
        translate = `${translate}px`
    }

    elem = elemsRef.current[current % length]

    if (current > length && elem) {
        rect = (elem as HTMLDivElement).getBoundingClientRect()
        translate = start - rect.left

        contentStyle.width = `${rect.width}px`
        contentStyle.height = `${rect.height}px`
        translate = `${translate}px`
    }

    return {...state, contentStyle, transform}
}
