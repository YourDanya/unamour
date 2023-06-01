import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {useExternalState, useResizeObserve} from 'app/[locale]/_common/hooks/component/component.hooks'
import {LoadImageProps} from 'app/[locale]/_common/components/load-image/load-image.types'
import {CSSProperties} from 'react'
import {ImgHTMLAttributes} from 'react'

const useLoadImage = (props: LoadImageProps) => {
    const {width, height} = props
    const [loaded, setLoaded] = useState(false)

    const onLoaded = () => {
        setLoaded(true)
    }

    let style: CSSProperties = {}

    if (width) {
        style.width = `${width}px`
    }

    if (height) {
        style.height = `${height}px`
    }

    const imgRef = useRef<HTMLImageElement | null>(null)

    useEffect(() => {
        const image = new Image()
        image.src = props.src as string
        image.onload = onLoaded

        return () => {
            image.onload = null
        }
    }, [])

    return {
        loaded, onLoaded, style, imgRef
    }
}

export default useLoadImage