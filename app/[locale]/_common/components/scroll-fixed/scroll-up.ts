import {getValues} from 'app/[locale]/_common/components/scroll-fixed/scroll'

export const scrollUp = (state: ReturnType<typeof getValues>) => {
    const {rect, props: {topOffset}} = state

    if (rect.top >= topOffset - 5) {
        return upTop(state)
    } else {
        return upNotTop(state)
    }
}

const upTop = (state: ReturnType<typeof getValues>) => {
    const {stateRef, rect, newStateValues, scrollY, props: {topOffset}, parentRect} = state
    let {bottom, position, toUpdate, top, marginTop} = newStateValues

    stateRef.current.toParentTop = rect.top - parentRect.top

    if (stateRef.current.position !== 'fixed') {
        bottom = 'unset'
        position = 'fixed'
        if (stateRef.current.toParentTop <= topOffset - 5) {
            position = 'static'
        }
        top = topOffset
    } else {
        toUpdate = false
    }

    return {bottom, position, toUpdate, top, marginTop}
}

const upNotTop = (state: ReturnType<typeof getValues>) => {
    const {stateRef, newStateValues} = state
    let {top, bottom, marginTop, toUpdate, position} = newStateValues

    if (stateRef.current.position !== 'static') {
        position = 'static'
        bottom = 'unset'
        top = 'unset'
        marginTop = stateRef.current.toParentTop
        stateRef.current.toBottom = false
    } else {
        toUpdate = false
    }

    return {top, bottom, marginTop, toUpdate, position}
}