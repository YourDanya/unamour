import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {useExternalState, useResizeObserve} from 'app/[locale]/_common/hooks/component/component.hooks'
import {LoadImageProps} from 'app/[locale]/_common/components/load-image/load-image.types'
import {CSSProperties} from 'react'

const useLoadImage = (props: LoadImageProps) => {

    const [loaded, setLoaded] = useState(false)

    const onLoaded = () => {
        setLoaded(true)
    }

    return {
        loaded, onLoaded
    }
}

export default useLoadImage