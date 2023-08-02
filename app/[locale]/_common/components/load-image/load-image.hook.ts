import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import {LoadImageProps} from 'app/[locale]/_common/components/load-image/load-image.types'

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