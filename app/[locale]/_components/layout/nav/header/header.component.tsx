'use client'

import {FC} from 'react'
import search from 'public/icons/search.svg'
import searchWhite from 'public/icons/search-white.svg'
import shoppingCart from 'public/icons/shopping-cart.svg'
import shoppingCartWhite from 'public/icons/shopping-cart-white.svg'
import bookmark from 'public/icons/bookmark.svg'
import bookmarkWhite from 'public/icons/bookmark-white.svg'
import useNavHeader from 'app/[locale]/_components/layout/nav/header/header.hook'
import NavLink from 'app/[locale]/_common/components/nav-link/nav-link.component'
import {NavHeaderProps} from 'app/[locale]/_components/layout/nav/header/header.types'
import Button from 'app/[locale]/_common/components/button/button.component'
import 'app/[locale]/_components/layout/nav/header/header.styles.sass'

const NavHeader: FC<NavHeaderProps> = (props) => {
    const {home} = props
    const {quantity, onShowModal} = useNavHeader(props)
    
    return (
        <div className="container nav__header">
            <NavLink href={'/'} className="nav__title">
                UNAMOUR
            </NavLink>
            <div className="nav__icons">
                <Button name="search" onClick={onShowModal}>
                    <img
                        className={'nav__icon nav__icon--first'}
                        src={home ? searchWhite.src : search.src}
                        alt={'shop item'}
                    />
                </Button>
                <NavLink href={'/favorites'}>
                    <img
                        className={'nav__icon'}
                        src={home ? bookmarkWhite.src : bookmark.src}
                        alt={'shop item'}
                    />
                </NavLink>
                <Button className={'nav__cart-btn'} name="shopping" onClick={onShowModal}>
                    <div className={`nav__cart-quantity ${home? 'nav__cart-quantity--home' : ''}`}>
                        {quantity !==0 && quantity}
                    </div>
                    <img
                        className="nav__icon nav__icon--last"
                        src={home ? shoppingCartWhite.src : shoppingCart.src}
                        alt={'shop item'}
                    />
                </Button>
            </div>
        </div>
    )
}

export default NavHeader