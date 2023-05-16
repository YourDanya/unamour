import React from 'react'
import NavLink from 'app/[locale]/_common/components/nav-link/nav-link.component'
import {FC} from 'react'
import {MenuProps} from 'app/[locale]/profile/_components/_layout/profile-menu/profile-menu.types'

const ProfileMenu: FC<MenuProps> = (props) => {
    const {menu, translMenu, className, user} = props

    return (
        <div className={`profile__menu ${className ?? ''}`}>
            {menu.map((item, index) => (index !== 3 || user?.isAdmin) && (
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