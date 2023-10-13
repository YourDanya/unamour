import {useState} from 'react'
import {MouseAction} from 'app/_common/types/types'
import {useRef} from 'react'
import useResize from 'app/_common/hooks/helpers/resize/resize.hook'

const useImages = () => {
    const [current, setCurrent] = useState(0)

    const onTab: MouseAction = (event) => {
        const name = event.currentTarget.getAttribute('data-index') as string
        setCurrent(+name)
    }

    // const {height, elemRef} = useGetParamForImages()

    const onResize = () => setTimeout( () => {
        if (!elemRef.current) {
            return
        }
        const width = elemRef.current.getBoundingClientRect().width

        const windowWidth = window.innerWidth

        if (windowWidth < 992) {
            setHeight(undefined)
            return
        }

        setHeight(width * 4 / 3)
    })

    const [height, setHeight] = useState<number | undefined>(0)
    const elemRef = useRef<HTMLDivElement | null>(null)

    useResize(onResize, [], {delay: 200})

    return {current, onTab, setCurrent, height, elemRef}
}

export default useImages