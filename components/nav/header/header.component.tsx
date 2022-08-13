import React from "react"
import Link from "next/link"
import search from '/public/icons/search.svg'
import searchWhite from '/public/icons/search-white.svg'
import shoppingCart from '/public/icons/shopping-cart.svg'
import shoppingCartWhite from '/public/icons/shopping-cart-white.svg'
import bookmark from '/public/icons/bookmark.svg'
import bookmarkWhite from '/public/icons/bookmark-white.svg'
import Button from "../../common/button/button.component";

type navHeaderProps = {
    home: boolean,
    showModal: (event: React.MouseEvent<HTMLElement>) => void
}

const NavHeader: React.FC<navHeaderProps> = ({showModal, home}) => {

    return (
        <div className="nav__header">
            <Link href={'/'}>
                <a className="nav__title">UNAMOUR</a>
            </Link>
            <div className="nav__icons">
                <Button name='search' onClick={showModal}>
                    <img
                        className={'nav__icon nav__icon--first'}
                        src={home ? searchWhite.src : search.src}
                        alt={'shop item'}
                    />
                </Button>
                <Link href={'/favorites'}>
                    <a>
                        <img
                            className={'nav__icon'}
                            src={home ? bookmarkWhite.src : bookmark.src}
                            alt={'shop item'}
                        />
                    </a>
                </Link>
                <Button name='shopping' onClick={showModal}>
                    <img
                        className='nav__icon nav__icon--last'
                        src={home ? shoppingCartWhite.src : shoppingCart.src}
                        alt={'shop item'}
                    />
                </Button>
            </div>
        </div>
    )
}

export default NavHeader