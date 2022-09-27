import {useSetTrue} from 'hooks/event-handler.hooks'

const useCookie = () => {
    const [hidden, handleClick] = useSetTrue()
    return {hidden, handleClick}
}

export default useCookie