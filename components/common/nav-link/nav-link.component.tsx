import React from "react"
import Link from "next/link";
import useNavLink from "./nav-link.hook";

export type NavLinkProps = {
    href: string,
    className: string,
    activeClassName?: string,
    children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = (props) => {

    const {href, activeClassName, className, children} = props
    const {path, handleClick} = useNavLink(props)

    return (
        <Link href={href}>
            <a className={`${className} ${path===href ? activeClassName : ''}`} onClick={handleClick}>
                {children}
            </a>
        </Link>
    )
}

export default NavLink