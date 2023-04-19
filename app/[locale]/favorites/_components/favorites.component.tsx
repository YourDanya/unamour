import Link from 'next/link'
import {FC} from 'react'
import useFavorites from 'app/[locale]/favorites/_components/favorites.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import FavoriteItem from 'app/[locale]/favorites/_components/favorite-item/favorite-item.component'

const Favorites: FC = () => {
    const {items, transl, width, elemRef, getFavorites, onLogin} = useFavorites()

    return (
        <div className={'favorites container'}>
            <div className={'favorites__title'}>
                {transl.favorite}
            </div>
            {!(getFavorites.error || getFavorites.data) && (<Spinner/>)}
            {items && items.length > 0 && (
                <div className={'favorites__items'} ref={elemRef}>
                    {items.map((item, index) => (
                        <FavoriteItem key={index} item={item} width={width}/>
                    ))}
                </div>
            )}
            {items && items?.length === 0 && (
                <div className={'favorites__empty'}>
                    <div className="favorites__empty-title">
                        {transl.emptyTitle}
                    </div>
                    <Link href={'/shop-items/all'} className={'favorites__empty-button'}>
                        {transl.emptyButton}
                    </Link>
                </div>
            )}
            {!items && (getFavorites.error || getFavorites.success) && (
                <div className="favorites__no-user">
                    <div className="favorites__no-user-title">
                        {transl.noUser}
                    </div>
                    <Button className={'favorites__no-user-button'} onClick={onLogin}>
                        {transl.login}
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Favorites