import {useGetState} from 'app/[locale]/_common/components/scroll-fixed/scroll-fixed.hook'
import {Property} from 'csstype'
import Position = Property.Position
import {NewStateValues} from 'app/[locale]/_common/components/scroll-fixed/scroll-fixes.types'
import {scrollDown} from 'app/[locale]/_common/components/scroll-fixed/scroll-down'
import {scrollUp} from 'app/[locale]/_common/components/scroll-fixed/scroll-up'

export const scroll = (state: ReturnType<typeof useGetState>) => {
    const {stateRef, elemRef, setState} = state

    if (stateRef.current.self) {
        stateRef.current.self = false
        return
    }

    const stateValues = getValues(state)
    const {scrollY} = stateValues

    let scrollState: NewStateValues

    if (scrollY > stateRef.current.scrollY) {
        scrollState = scrollDown(stateValues)
    } else {
        scrollState = scrollUp(stateValues)
    }

    const {position, top, bottom, translateY, toUpdate} = scrollState

    stateRef.current.scrollY = scrollY

    if (toUpdate) {
        stateRef.current.position = position
        setState({position, top, bottom, translateY})
    }
}

export const getValues = (state: ReturnType<typeof useGetState>) => {
    const {stateRef, elemRef} = state

    const scrollY = window.scrollY
    const viewPort = window.innerHeight
    const rect = elemRef.current?.getBoundingClientRect() as DOMRect
    const menuHeight = rect.height
    const parentElement = elemRef.current?.parentElement
    const parentRect = parentElement?.getBoundingClientRect() as DOMRect

    let position: Position = 'static'
    let top = 'unset'
    let bottom = 'unset'
    let toUpdate = true
    let translateY = 0

    const newStateValues: NewStateValues = {position, top, bottom, toUpdate, translateY}

    return {...state, scrollY, rect, viewPort, menuHeight, parentElement, parentRect, newStateValues}
}

