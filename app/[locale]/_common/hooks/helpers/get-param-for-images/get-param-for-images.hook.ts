import {useState} from 'react'
import {useRef} from 'react'
import useResize from 'app/[locale]/_common/hooks/helpers/resize/resize.hook'

const useGetParamForImages = (ratio = 4 / 3) => {
    const onResize = () => {
        if (!elemRef.current) {
            return
        }

        const width = elemRef.current.getBoundingClientRect().width
        setHeight(width * ratio)
    }

    const [height, setHeight] = useState(0)
    const elemRef = useRef<HTMLDivElement | null>(null)

    useResize(onResize)

    return {onResize, height, elemRef}
}

export default useGetParamForImages