'use client'

import {FC} from 'react'
import useNavLink from 'app/[locale]/_common/components/nav-link/nav-link.hook'
import {NavLinkProps} from 'app/[locale]/_common/components/nav-link/nav-link.types'
import Link from 'next/link'
import 'app/[locale]/_common/components/nav-link/nav-link.styles.sass'

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