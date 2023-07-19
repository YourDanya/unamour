import {useGetState} from 'app/[locale]/_common/components/scroll-fixed/scroll-fixed.hook'
import {useEffect} from 'react'
import {useLayoutEffect} from 'react'

export const onResize = (state: ReturnType<typeof useGetState>) => {
    const {stateRef, elemRef, setState, props: {topOffset, resize, setResize}} = state

    if (!resize) {
        return
    }

    const newHeight = elemRef.current?.clientHeight as number
    const heightDiff = newHeight - stateRef.current.height
    stateRef.current.height = newHeight

    if (setResize) {
        setResize(false)
    }

    if (!stateRef.current.toBottom) {
        return
    }

    stateRef.current.toBottom = false
    stateRef.current.position = 'static'

    setState({
        bottom: 'unset', top: 'unset', marginTop: stateRef.current.toParentTop, position: 'static'
    })

}


// if (stateRef.current.toParentTop - heightDiff > topOffset) {
//     stateRef.current.toParentTop -= heightDiff
// } else {
//     stateRef.current.toBottom = false
//     stateRef.current.position = 'static'
//     setState({
//         bottom: 'unset', top: 'unset', translateY: stateRef.current.toParentTop, position: 'static'
//     })
// }
//
// if (stateRef.current.position === 'static' && heightDiff > 0) {
//     setState({
//         bottom: 'unset', top: 'unset', translateY: stateRef.current.toParentTop, position: 'static'
//     })
// }