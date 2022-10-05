import React from 'react'
import useNavLink from 'components/common/nav-link/nav-link.hook'
import Link from 'next/link'

export type NavLinkProps = {
    href: string,
    className?: string,
    activeClassName?: string,
    children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = (props) => {

    const {href, activeClassName, className, children} = props
    const {path, handleClick} = useNavLink(props)

    return (
        <Link href={href}>
            <a className={`nav-link ${className} ${path===href ? `nav-link--active ${activeClassName}` : ''}`} onClick={handleClick}>
                {children}
            </a>
        </Link>
    )
}

export default NavLink