import React from 'react'
import Button from 'components/common/button/button.component'
import useNavMenu from 'components/nav/nav-menu/nav-menu.hook'
import NavLink from 'components/common/nav-link/nav-link.component'
import {Fragment} from 'react'

type navMenuProps = {
    showTopModal: (event: React.MouseEvent<HTMLElement>) => void
}

const NavMenu: React.FC<navMenuProps> = (props) => {

    const {showTopModal} = props
    const {clientService, handleClientClick, user, transl, content} = useNavMenu()

    console.log('render nav menu')

    return (
        <>
            <div className="container menu">
                <div className="menu__items menu__items--first">
                    {content.firstLinks.map((elem, idx) => (
                        <NavLink className={'menu__item'} href={elem} key={elem}>
                            {transl.firstLinks[idx]}
                        </NavLink>
                    ))}
                </div>
                <div className={`menu__items menu__items--second`}>
                    {content.secondLinks.map((elem, idx) => (
                        <Fragment key={elem}>
                            <NavLink className={'menu__item'} href={elem}>
                                {transl.secondLinks[idx]}
                            </NavLink>
                            {idx === 0 && (
                                <Button className={'menu__item'} onClick={handleClientClick}>
                                    {transl.service}
                                </Button>
                            )}
                        </Fragment>
                    ))}
                    {user ? (
                        <NavLink className={'menu__item'} href={'/profile/update-user'}>
                            {transl.profile}
                        </NavLink>
                    ) : (
                        <Button className={'menu__item'} onClick={showTopModal} name={'sign'}>
                            {transl.login}
                        </Button>
                    )}
                </div>
            </div>
            <div className={`menu service-menu ${clientService ? 'service-menu--active' : ''}`}>
                <Button className="service-menu__back" onClick={handleClientClick}>
                    <div className={'arrow-back service-menu__arrow'}/>
                    {transl.back}
                </Button>
                <div className="menu__items">
                    <div className="menu__item menu__item--bold">
                        {transl.service}
                    </div>
                    {content.serviceLinks.map((elem, idx) => (
                        <NavLink className={'menu__item'} href={elem} key={elem}>
                            {transl.serviceLinks[idx]}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NavMenu