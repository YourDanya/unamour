import {useRouter} from 'next/navigation'
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'
import {useOmitFirstEffect} from 'app/[locale]/_common/hooks/component/component.hooks'

const useNavRoute = (hideModal: () => void) => {
    const path = usePathname()
    const [home, setHome] = useState(path === '/')

    useEffect(() => {
        if (path === '/') {
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