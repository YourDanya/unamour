import {MouseEvent} from "react"
import {NavLinkProps} from 'app/[locale]/_common/components/nav-link/nav-link.types'
import {usePathname} from 'next/navigation'

const useNavLink = (props: NavLinkProps) => {
    const {href} = props

    const path = usePathname()

    const onClick = (event: MouseEvent) => {
        if (href === path) {
            event.preventDefault()
        }
    }

    return {path, onClick}
}

export default useNavLink