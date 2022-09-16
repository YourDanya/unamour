import {useRouter} from "next/router"
import {NavLinkProps} from "./nav-link.component"
import {MouseEvent} from "react"

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