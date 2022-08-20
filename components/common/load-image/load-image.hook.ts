import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react"
import {loadImageProps} from "./load-image.component"
import {useExternalState, useResizeObserve} from "../../../hooks/component.hooks"

const useLoadImage = (props: loadImageProps) => {

    const [height, setHeight] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    const [loaded, setLoaded] = useExternalState(props.loaded, undefined, false)

    const handleLoaded = props.handleLoaded ? props.handleLoaded: () => {
        setLoaded(true)
    }

    const calcHeight = () => {
        const width = ref.current?.getBoundingClientRect().width as number
        const height = width * 4 / 3
        setHeight(height)
    }

    useLayoutEffect(calcHeight,[])
    useResizeObserve(calcHeight)

    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        console.log('imgRef current complete', imgRef?.current?.complete)
        const complete = imgRef?.current?.complete
        if (complete) {

        }
    }, [])

    return {loaded, ref, height, handleLoaded, imgRef}
}

export default useLoadImage