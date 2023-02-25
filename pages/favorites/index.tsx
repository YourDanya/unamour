import {NextPage} from 'next'
import Link from 'next/link'
import useFavorites from 'pages/favorites/favorites.hook'

const Index: NextPage = () => {
    const {favorites, transl} = useFavorites()

    return (
        <div className={'favorites'}>
            <div className={'favorites__title'}>
                {transl.favorite}
            </div>
            {favorites ? (
                <div className={'favorites__items'}>
                </div>
            ) : (
                <div className={'favorites__empty'}>
                    <div className="favorites__empty-title">
                        {transl.emptyTitle}
                    </div>
                    <Link href={'/shop-items/all'} className={'favorites__empty-button'}>
                        {transl.emptyButton}
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Index