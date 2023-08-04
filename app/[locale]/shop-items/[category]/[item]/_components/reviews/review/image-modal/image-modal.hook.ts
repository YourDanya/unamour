import useReview from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.hook'
import {useState} from 'react'
import {useRef} from 'react'
import useResize from 'app/_common/hooks/helpers/resize/resize.hook'
import {useEffect} from 'react'

const useImageModal = (props: ReturnType<typeof useReview>) => {
    const {activeUrl} = props

    const state = useGetState(props)
    const {imgSizeRef} = state

    useResize(() => calc(state))

    useLoadImage(state)

    return {...state}
}

export default useImageModal

const useGetState = (props: ReturnType<typeof useReview>) => {
    const {activeUrl} = props
    const [ratioClass, setRatioClass] = useState('')
    const imgSizeRef = useRef({naturalWidth: 0, naturalHeight: 0})
    const [style, setStyle] = useState({width: '0px', height: '0px'})

    return {ratioClass, setRatioClass, imgSizeRef, style, setStyle, activeUrl}
}

const useLoadImage = (state: ReturnType<typeof useGetState>) => {
    const {activeUrl, imgSizeRef} = state

    useEffect(() => {
        if (!activeUrl) {
            return
        }

        const img = new Image()
        img.src = activeUrl

        img.onload = () => {
            imgSizeRef.current.naturalHeight = img.naturalHeight
            imgSizeRef.current.naturalWidth = img.naturalWidth
            calc(state)
        }
    }, [activeUrl])
}

const calc = (state: ReturnType<typeof useGetState>) => {
    const {setStyle, style, imgSizeRef} = state

    const {naturalWidth, naturalHeight} = imgSizeRef.current

    if (naturalWidth === 0 || naturalHeight === 0) {
        return
    }

    const aspectRatio = naturalWidth / naturalHeight
    let coefficient = 1
    const windowWidth = window.innerWidth
    let windowHeight = window.innerHeight

    let estimatedWidth = windowWidth * coefficient
    let estimatedHeigt = estimatedWidth / aspectRatio

    let deltaHeight = 60
    let deltaWidth = 70

    if (windowWidth < 576) {
        deltaWidth = 0
    }

    while (estimatedHeigt >= windowHeight - deltaHeight || estimatedWidth >= windowWidth - deltaWidth) {
        coefficient -= 0.1
        estimatedWidth = windowWidth * coefficient
        estimatedHeigt = estimatedWidth / aspectRatio
    }

    setStyle({width: `${estimatedWidth}px`, height: `${estimatedHeigt}px`})
}