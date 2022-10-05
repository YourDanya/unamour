import {useState} from 'react'

const useSignInUp = () => {
    const [sign, setSign] = useState<'in' | 'up'>('in')
    return {sign, setSign}
}

export default useSignInUp