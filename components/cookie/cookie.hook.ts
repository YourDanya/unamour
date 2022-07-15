import {useSetTrue} from "../../hooks/hooks";

const useCookie = () => {
    const [hidden, handleClick] = useSetTrue()
    return {hidden, handleClick}
}

export default useCookie