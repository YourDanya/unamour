import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {selectPath} from 'redux/main/main.slice'
import {useDebounceEffect} from 'hooks/component/component.hooks'

const useNavRoute = (hideModal: () => void) => {
    const router= useRouter()

    const [home, setHome] = useState(router.asPath === '/')

    useEffect(() => {
        if(router.asPath==='/'){
            if (!home) setHome(true)
        }
        else {
            if(home) setHome(false)
        }
    }, [router.asPath])

    const path = useSelector(selectPath)

    useDebounceEffect(() => {
        hideModal()
    }, [path], 300)

    return {home}
}

export default useNavRoute