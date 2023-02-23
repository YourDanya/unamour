import {FC} from 'react'
import Button from 'components/common/button/button.component'
import useNavMenu from 'components/nav/nav-menu/nav-menu.hook'
import NavLink from 'components/common/nav-link/nav-link.component'
import {Fragment} from 'react'
import {NavMenuProps} from 'components/nav/nav-menu/nav-menu.types'

const NavMenu: FC<NavMenuProps> = (props) => {
    const {showTopModal} = props
    const {clientService, onClientService, user, transl, content} = useNavMenu()

    return (
        <>
            <div className="container nav-menu">
                <div className="nav-menu__items nav-menu__items--first">
                    {content.firstLinks.map((elem, idx) => (
                        <NavLink className={'nav-menu__item'} href={elem} key={elem}>
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
                        <Button className={'nav-menu__item'} onClick={showTopModal} name={'sign'}>
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