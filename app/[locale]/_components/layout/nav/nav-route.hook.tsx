import {useRouter} from 'next/navigation'
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {selectPath} from 'app/[locale]/_redux/main/main.selectors'

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

    // useDebounceEffect(() => {
    //     hideModal()
    // }, [path], 300)

    useEffect(() => {
        router.events.on('routeChangeComplete', hideModal)
        return () => {
            router.events.off('routeChangeComplete', hideModal)
        }
    }, [])

    return {home}
}

export default useNavRoute