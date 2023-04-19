import {useMemo, useRef, useState} from 'react'
import {useSelector} from 'react-redux'

const useAdditional = () => {

    // let items: ClientItem[] = useSelector(selectClientItems)
    //
    // const similarItems: ClientItem[] = useMemo(() => {
    //     const arr = []
    //     for (let i = 0; i < items.length; i++) {
    //         if (i < 10) arr.push(items[i])
    //     }
    //     return arr
    // }, [items])
    //
    // const viewedItems: ClientItem[] = useMemo(() => {
    //     const arr = []
    //     for (let i=items.length-1; i>=0; i--) {
    //         if (i > items.length - 10) arr.push(items[i])
    //     }
    //     return arr
    // }, [items])
    //
    // const [perSlide, setPerSlide] = useState(4)
    // const stateRef = useRef({perSlide: 4})
    //
    // const handleResize = () => {
    //     if (stateRef.current.perSlide!==2 && window.innerWidth<=992) {
    //         stateRef.current.perSlide=2
    //         setPerSlide(2)
    //     }
    //     if (stateRef.current.perSlide!==4 && window.innerWidth>992) {
    //         stateRef.current.perSlide=4
    //         setPerSlide(4)
    //     }
    // }
    //
    // useResizeObserve(handleResize)
    //
    // return {similarItems, viewedItems, perSlide}
}

export default useAdditional
