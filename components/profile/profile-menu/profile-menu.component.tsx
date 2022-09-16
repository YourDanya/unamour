import React from "react"
import NavLink from "../../common/nav-link/nav-link.component"

type ProfileMenuProps = {
    className?: string,
    menu: string[],
    translMenu: string[]
}

const ProfileMenu: React.FC<ProfileMenuProps> = (props) => {

    const {menu, translMenu, className} = props

    return (
        <div className={`profile__menu ${className ?? ''}`}>
            {menu.map((item, index) => (
                <NavLink
                    href={item}
                    key={index}
                    className={'profile__menu-link'}
                    activeClassName={'profile__menu-link--active'}
                >
                    {translMenu[index]}
                </NavLink>
            ))}
        </div>
    )
}

export default ProfileMenu