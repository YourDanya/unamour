import {useGetState} from 'app/_common/components/scroll-fixed/scroll-fixed.hook'
import {NewStateValues} from 'app/_common/components/scroll-fixed/scroll-fixes.types'
import {scrollDown} from 'app/_common/components/scroll-fixed/scroll-down'
import {scrollUp} from 'app/_common/components/scroll-fixed/scroll-up'
import {Property} from 'csstype'

export const scroll = (state: ReturnType<typeof useGetState>) => {
    const {stateRef, elemRef, setState} = state

    const stateValues = getValues(state)
    const {scrollY} = stateValues

    if (stateRef.current.self) {
        stateRef.current.self = false
        window.scroll(0, stateRef.current.scrollY)
        return
    }

    let scrollState: NewStateValues

    if (scrollY > stateRef.current.scrollY) {
        scrollState = scrollDown(stateValues)
    } else {
        scrollState = scrollUp(stateValues)
    }

    const {position, top, bottom, marginTop, toUpdate} = scrollState

    stateRef.current.scrollY = scrollY

    if (toUpdate) {
        stateRef.current.position = position
        if (typeof marginTop === 'number') {
            stateRef.current.marginTop = marginTop
        }
        setState({position, top, bottom, marginTop})
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

    let position: Property.Position = 'static'
    let top = 'unset'
    let bottom = 'unset'
    let toUpdate = true
    let marginTop = 0

    const newStateValues: NewStateValues = {position, top, bottom, toUpdate, marginTop}

    return {...state, scrollY, rect, viewPort, menuHeight, parentElement, parentRect, newStateValues}
}

