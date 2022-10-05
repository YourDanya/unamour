import {useSetNumber} from 'hooks/event-handler/event-handler.hooks'
import {ImagesProps} from 'components/shop-item/images/images.component'

const useImages = (props: ImagesProps) => {
    const [current, handleTabClick, setCurrent] = useSetNumber(0, 'data-index')
    return {...props, current, handleTabClick, setCurrent}
}

export default useImages