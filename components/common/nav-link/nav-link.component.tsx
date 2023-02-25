import {FC} from 'react'
import useNavLink from 'components/common/nav-link/nav-link.hook'
import Link from 'next/link'
import {NavLinkProps} from 'components/common/nav-link/nav-link.types'

const NavLink: FC<NavLinkProps> = (props) => {

    const {href, activeClassName, className, children} = props
    const {path, handleClick} = useNavLink(props)

    return (
        <Link
            href={href}
            className={`nav-link ${className} ${path===href ? `nav-link--active ${activeClassName}` : ''}`}
            onClick={handleClick}>
            {children}
        </Link>
    )
}

export default NavLink