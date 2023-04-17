import React from 'react'
import NavLink from 'components/common/nav-link/nav-link.component'
import {ProfileMenuProps} from 'components/profile/profile-menu/profile-menu.types'

const ProfileMenu: React.FC<ProfileMenuProps> = (props) => {
    const {menu, translMenu, className, user} = props

    return (
        <div className={`profile__menu ${className ?? ''}`}>
            {menu.map((item, index) => (index !== 4 || user?.isAdmin) && (
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