import Link from 'next/link'
import Spinner from 'components/common/spinner/spinner.component'
import FavoriteItem from 'components/favorites/favorite-item/favorite-item.component'
import Button from 'components/common/button/button.component'
import useFavorites from 'components/favorites/favorites.hook'
import {FC} from 'react'

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