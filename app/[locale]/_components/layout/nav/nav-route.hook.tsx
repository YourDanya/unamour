import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'
import {useOmitFirstEffect} from 'app/[locale]/_common/hooks/component/component.hooks'

const useNavRoute = (hideModal: () => void) => {
    const path = usePathname()
    const [home, setHome] = useState(path === '/')

    useEffect(() => {
        if (path === '/ua' || path === '/eng' || path === '/ru') {
            if (!home) setHome(true)
        } else {
            if (home) setHome(false)
        }
    }, [path])

    useOmitFirstEffect(() => {
        hideModal()
    }, [path])

    return {home}
}

export default useNavRoute