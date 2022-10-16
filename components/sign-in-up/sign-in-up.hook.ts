import {useSetActive} from 'hooks/event-handler/event-handler.hooks'

const useSignInUp = () => {
    const [sign, handleSign] = useSetActive('sign-in')
    return {sign, handleSign}
}

export default useSignInUp