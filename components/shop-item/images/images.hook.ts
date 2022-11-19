import {ImagesProps} from 'components/shop-item/images/images.component'
import {useSetActive} from 'hooks/event-handler/event-handler.hooks'

const useImages = (props: ImagesProps) => {
    const [current, handleTabClick, setCurrent] = useSetActive(0, 'data-index')
    return {...props, current, handleTabClick, setCurrent}
}

export default useImages