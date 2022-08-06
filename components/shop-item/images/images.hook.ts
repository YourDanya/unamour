import {imagesProps} from "./images.component"
import {useSetNumber} from "../../../hooks/event-handler.hooks"

const useImages = (props: imagesProps) => {
    const [current, handleTabClick, setCurrent] = useSetNumber(0, 'data-index')
    console.log('current', current)
    return {...props, current, handleTabClick, setCurrent}
}

export default useImages