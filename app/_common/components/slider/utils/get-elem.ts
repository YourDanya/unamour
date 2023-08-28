import {useGetState} from 'app/_common/components/slider/slider.hook'

export const getElem = (state: ReturnType<typeof useGetState> & { index: number }) => {
    const {elemsRef, leftElemsRef, rightElemsRef, index} = state

    let elem = elemsRef.current[index]

    if (index < 0) {
        elem = leftElemsRef.current[leftElemsRef.current.length + index]
    }
    if (index >= elemsRef.current.length) {
        elem = rightElemsRef.current[index - elemsRef.current.length]
    }

    return elem
}