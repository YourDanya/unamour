import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {LoadImageProps} from 'app/_common/components/load-image/load-image.types'
import {CSSProperties} from 'react'

const useLoadImage = (props: LoadImageProps) => {
    const {width, height, ratio, containerStyle} = props

    const style: CSSProperties = {...containerStyle}
    const thumbStyle: CSSProperties = {}

    if (width) {
        style.width = `${width}px`
    }

    if (height) {
        style.height = `${height}px`
        thumbStyle.paddingBottom = `${height}px`
    }

    if (ratio && !height) {
        thumbStyle.paddingBottom = `${ratio * 100}%`
    }

    const imgRef = useRef<HTMLImageElement | null>(null)

    const [loaded, setLoaded] = useState(false)
    const onLoaded = () => {
        setLoaded(true)
    }

    useLayoutEffect(() => {
        const image = new Image()
        image.src = props.src as string

        image.onload = onLoaded

        return () => {
            image.onload = null
        }
    }, [])

    return {
        loaded, onLoaded, style, imgRef, thumbStyle
    }
}

export default useLoadImage
