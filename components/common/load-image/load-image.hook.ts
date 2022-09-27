import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {LoadImageProps} from 'components/common/load-image/load-image.component'
import {useExternalState, useResizeObserve} from 'hooks/component/component.hooks'

const useLoadImage = (props: LoadImageProps) => {

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
        const complete = imgRef?.current?.complete
        const naturalWidth = imgRef?.current?.naturalWidth
        const loadEvent = new Event('load')
        if (!loaded && complete && naturalWidth) {
            imgRef.current.dispatchEvent(loadEvent)
        }
    }, [loaded])

    return {loaded, ref, height, handleLoaded, imgRef}
}

export default useLoadImage