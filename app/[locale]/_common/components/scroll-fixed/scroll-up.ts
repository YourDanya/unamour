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
    const {stateRef, rect, newStateValues, scrollY, props: {topOffset}} = state
    let {bottom, position, toUpdate, top, translateY} = newStateValues

    stateRef.current.toParentTop = scrollY + rect.top - stateRef.current.parentToPageTop

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

    return {bottom, position, toUpdate, top, translateY}
}

const upNotTop = (state: ReturnType<typeof getValues>) => {
    const {stateRef, newStateValues} = state
    let {top, bottom, translateY, toUpdate, position} = newStateValues

    if (stateRef.current.position !== 'static') {
        position = 'static'
        bottom = 'unset'
        top = 'unset'
        translateY = stateRef.current.toParentTop
        stateRef.current.toBottom = false
    } else {
        toUpdate = false
    }

    return {top, bottom, translateY, toUpdate, position}
}