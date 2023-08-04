import {useState} from 'react'
import {MouseAction} from 'app/_common/types/types'

const useSignInUp = () => {
    const [sign, setSign] = useState('login')

    const onSetSign: MouseAction = (event) => {
        const name = event.currentTarget.getAttribute('name') as string
        setSign(name)
    }

    return {sign, onSetSign}
}

export default useSignInUp