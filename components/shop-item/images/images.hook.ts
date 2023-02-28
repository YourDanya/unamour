import {useSetActive} from 'hooks/event-handler/event-handler.hooks'
import {useGetParamForImages} from 'hooks/other/other.hooks'

const useImages = () => {
    const [current, handleTabClick, setCurrent] = useSetActive(0, 'data-index')

    const {width, height, elemRef} = useGetParamForImages()

    return {current, handleTabClick, setCurrent, elemRef, width, height}
}

export default useImages