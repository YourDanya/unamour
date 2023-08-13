import {CSSProperties} from 'react'
import {useGetState} from 'app/_common/components/slider-v2/slider.hook'
import {useMemo} from 'react'
import {useEffect} from 'react'
import {useLayoutEffect} from 'react'
import {getElem} from 'app/_common/components/slider-v2/get-elem'

export const useCalcDimensions = (state: ReturnType<typeof useGetState>) => {
    const {current, mounted, move, translate} = state

    useLayoutEffect(() => {
        calc(state)
    }, [current, mounted])

    let transform
    if (translate !== undefined) {
        transform = `translateX(${translate + move}px)`
    }

    return {...state, transform}
}

const calc = (state: ReturnType<typeof useGetState>) => {
    const {elemsRef, current, length, move, mounted, perSlide, setContentStyle, setTranslate} = state

    if (!mounted) {
        return
    }

    const contentStyle: CSSProperties = {}
    let translate

    const {left: start} = (elemsRef.current[0] as HTMLDivElement)?.getBoundingClientRect() ?? {}
    let index = current
    const currentElem = getElem({...state, index})
    const rect = (currentElem as HTMLDivElement).getBoundingClientRect()

    index = current + perSlide - 1
    const perSlideElem = getElem({...state, index})
    const perSlideElemRect = (perSlideElem as HTMLDivElement).getBoundingClientRect()

    translate = start - rect.left
    contentStyle.width = `${perSlideElemRect.right - rect.left}px`
    contentStyle.height = `${rect.height}px`

    setContentStyle(contentStyle)
    setTranslate(translate)
}

