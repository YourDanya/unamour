import {CSSProperties} from 'react'
import {useGetState} from 'app/_common/components/slider/slider.hook'
import {useMemo} from 'react'
import {useEffect} from 'react'
import {useLayoutEffect} from 'react'
import {getElem} from 'app/_common/components/slider/utils/get-elem'

export const useCalcDimensions = (state: ReturnType<typeof useGetState>) => {
    const {current, mounted, move, translate, props, perSlide} = state

    const {slideOffset} = props

    useLayoutEffect(() => {
        calc(state)
    }, [current, mounted])

    let transform
    if (translate !== undefined) {
        transform = `translateX(${translate + move}px)`
    }

    const slideStyles: CSSProperties = {}
    if (slideOffset) {
        slideStyles.marginRight = `${slideOffset}px`
    }

    if (props.container) {
        const calcOffset = `${slideOffset ? slideOffset * (perSlide - 1) / perSlide : 0}px`
        slideStyles.width = `calc(${1 / perSlide * 100}% - ${calcOffset})`
    }

    return {...state, transform, slideStyles}
}

export const calc = (state: ReturnType<typeof useGetState>) => {
    const {
        elemsRef, leftElemsRef, current, length, move, mounted, perSlide, setContentStyle, setTranslate,
        props: {infinite, container}, setTransition, moveRef, resizing
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

    if (container) {
        contentStyle.width = `100%`
        contentStyle.height = `auto`
    }

    if (resizing) {
        translate = 0
    }

    setContentStyle(contentStyle)
    setTranslate(translate)
}

