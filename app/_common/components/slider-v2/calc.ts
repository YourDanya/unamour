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

export const calc = (state: ReturnType<typeof useGetState>) => {
    const {
        elemsRef, leftElemsRef, current, length, move, mounted, perSlide, setContentStyle, setTranslate,
        props: {infinite}, setTransition, moveRef
    } = state

    if (!mounted) {
        return
    }

    if (!moveRef.current.fistCalc) {
        moveRef.current.fistCalc = true
        requestAnimationFrame(() => {
            setTransition('0.4s all')
        })
    }

    const contentStyle: CSSProperties = {}
    let translate
    let start = 0

    if (!infinite && elemsRef.current[0]) {
        start = (elemsRef.current[0] as HTMLDivElement).getBoundingClientRect().left
    } else if (infinite && leftElemsRef.current[0]){
        start = (leftElemsRef.current[0] as HTMLDivElement).getBoundingClientRect().left
    }

    let index = current
    const currentElem = getElem({...state, index})

    if (!currentElem) {
        return
    }

    const rect = (currentElem as HTMLDivElement).getBoundingClientRect()

    index = current + perSlide - 1
    const perSlideElem = getElem({...state, index})

    if (perSlideElem) {
        const perSlideElemRect = (perSlideElem as HTMLDivElement).getBoundingClientRect()
        contentStyle.width = `${perSlideElemRect.right - rect.left}px`
    }

    translate = start - rect.left
    contentStyle.height = `${rect.height}px`

    setContentStyle(contentStyle)
    setTranslate(translate)
}

