import {getValues} from 'app/[locale]/_common/components/scroll-fixed/scroll'

export const scrollDown = (state: ReturnType<typeof getValues>) => {
    const {scrollY, rect, viewPort, props: {bottomOffset}} = state

    if (rect.bottom - viewPort <= - bottomOffset + 5) {
        return downEnd(state)
    } else {
        return downNotEnd(state)
    }
}

const downNotEnd = (state: ReturnType<typeof getValues>) => {
    const {stateRef, newStateValues} = state
    let {position, top, bottom, translateY, toUpdate} = newStateValues

    if (stateRef.current.position !== 'static') {
        position = 'static'
        top = 'unset'
        bottom = 'unset'
        translateY = stateRef.current.toParentTop
    } else {
        toUpdate = false
    }

    return {position, top, bottom, translateY, toUpdate}
}

const downEnd = (state: ReturnType<typeof getValues>) => {
    const {parentRect, viewPort, props: {bottomOffset}} = state

    if (parentRect.bottom <= viewPort + bottomOffset) {
        return downParentEnd(state)
    } else {
        return downNotParentEnd(state)
    }
}

const downParentEnd = (state: ReturnType<typeof getValues>) => {
    const {stateRef, newStateValues, parentRect, rect, props: {bottomOffset}} = state
    let {bottom, translateY, toUpdate, top, position} = newStateValues

    if (stateRef.current.position !== 'static') {
        position = 'static'
        bottom = 'unset'
        top = 'unset'
        translateY = parentRect.height - rect.height - bottomOffset
        toUpdate = true
    } else {
        toUpdate = false
    }

    return {bottom, translateY, toUpdate, top, position}
}

const downNotParentEnd = (state: ReturnType<typeof getValues>) => {
    const {stateRef, newStateValues, rect, scrollY, props: {bottomOffset}} = state
    let {bottom, translateY, toUpdate, top, position} = newStateValues

    stateRef.current.toParentTop = scrollY + rect.top - stateRef.current.parentToPageTop

    if (stateRef.current.position !== 'fixed') {
        position = 'fixed'
        bottom = bottomOffset
        top = 'unset'
        stateRef.current.toBottom = true
    } else {
        toUpdate = false
    }

    return {bottom, translateY, toUpdate, top, position}
}

