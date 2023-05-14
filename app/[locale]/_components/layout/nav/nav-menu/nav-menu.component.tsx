'use client'

import {FC} from 'react'
import {NavMenuProps} from 'app/[locale]/_components/layout/nav/nav-menu/nav-menu.types'
import NavLink from 'app/[locale]/_common/components/nav-link/nav-link.component'
import Button from 'app/[locale]/_common/components/button/button.component'
import useNavMenu from 'app/[locale]/_components/layout/nav/nav-menu/nav-menu.hook'
import {Fragment} from 'react'

const NavMenu: FC<NavMenuProps> = (props) => {
    const {showTopModal} = props
    const {clientService, onClientService, user, transl, content, onShowModal} = useNavMenu(props)

    return (
        <>
            <div className="container nav-menu">
                <div className="nav-menu__items nav-menu__items--first">
                    {content.firstLinks.map((elem, idx) => (
                        <NavLink className={'nav-menu__item'} href={`/shop-items/${elem}`} key={elem}>
                            {transl.firstLinks[idx]}
                        </NavLink>
                    ))}
                </div>
                <div className={`nav-menu__items nav-menu__items--second`}>
                    {content.secondLinks.map((elem, idx) => (
                        <Fragment key={elem}>
                            <NavLink className={'nav-menu__item'} href={elem}>
                                {transl.secondLinks[idx]}
                            </NavLink>
                            {idx === 0 && (
                                <Button className={'nav-menu__item'} onClick={onClientService}>
                                    {transl.service}
                                </Button>
                            )}
                        </Fragment>
                    ))}
                    {user ? (
                        <NavLink className={'nav-menu__item'} href={'/profile/update-user'}>
                            {transl.profile}
                        </NavLink>
                    ) : (
                        <Button className={'nav-menu__item'} onClick={onShowModal} name={'sign'}>
                            {transl.login}
                        </Button>
                    )}
                </div>
            </div>
            <div className={`container nav-menu nav-menu--service ${clientService ? 'nav-menu--service--active' : ''}`}>
                <Button className="nav-menu__back" onClick={onClientService}>
                    <div className={'arrow-back'}/>
                    {transl.back}
                </Button>
                <div className="nav-menu__items">
                    <div className="nav-menu__item nav-menu__item--bold">
                        {transl.service}
                    </div>
                    {content.serviceLinks.map((elem, idx) => (
                        <NavLink className={'nav-menu__item'} href={elem} key={elem}>
                            {transl.serviceLinks[idx]}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NavMenu