import {useSetActive} from 'hooks/event-handler/event-handler.hooks'

const useSignInUp = () => {
    const [sign, handleSign] = useSetActive('login')
    return {sign, handleSign}
}

export default useSignInUp