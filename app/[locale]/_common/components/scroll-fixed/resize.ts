import {useGetState} from 'app/[locale]/_common/components/scroll-fixed/scroll-fixed.hook'

export const onResize = (state: ReturnType<typeof useGetState>) => {
    const {stateRef, elemRef, setState, props: {topOffset}} = state

    const newHeight = elemRef.current?.clientHeight as number
    const heightDiff = newHeight - stateRef.current.height

    stateRef.current.height = newHeight

    if (!stateRef.current.toBottom) {
        return
    }

    if(stateRef.current.toParentTop-heightDiff>topOffset) {
        stateRef.current.toParentTop -= heightDiff
    } else {
        stateRef.current.toBottom = false
        stateRef.current.position = 'static'
        setState({
            bottom: 'unset', top : 'unset', translateY: stateRef.current.toParentTop, position: 'static'
        })
    }
    if (stateRef.current.position === 'static' && heightDiff > 0) {
        setState({
            bottom: 'unset', top: 'unset', translateY: stateRef.current.toParentTop, position: 'static'
        })
    }
}