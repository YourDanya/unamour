import {useRouter} from "next/router"
import {useEffect, useState} from "react"

const useNavRoute = (hideModal: () => void) => {
    const router= useRouter()

    const [home, setHome] = useState(router.pathname === '/')

    const handleRouteChange = () => {
        console.log('route change')
        // if(router.pathname==='/'){
        //     if (!home) setHome(true)
        // }
        // else {
        //     if(home)setHome(false)
        // }
        hideModal()
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
        }
    }, [])

    useEffect(() => {
        if(router.pathname==='/'){
            if (!home) setHome(true)
        }
        else {
            if(home) setHome(false)
        }
    }, [router.pathname])

    return {home}
}

export default useNavRoute