import {useRouter} from "next/router"
import {MouseEvent} from "react"
import {NavLinkProps} from 'app/[locale]/_common/components/nav-link/nav-link.types'

const useNavLink = (props: NavLinkProps) => {
    const {href} = props

    const router = useRouter()
    const path = router.asPath

    const handleClick = (event: MouseEvent) => {
        if (href === path) event.preventDefault()
    }

    return {path, handleClick}
}

export default useNavLink