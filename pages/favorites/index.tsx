import {NextPage} from 'next'
import Link from 'next/link'
import useFavorites from 'pages/favorites/favorites.hook'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'

const Index: NextPage = () => {
    const {items, transl, width, height, elemRef} = useFavorites()

    return (
        <div className={'favorites'}>
            <div className={'favorites__title'}>
                {transl.favorite}
            </div>
            {items ? (
                <div className={'favorites__items'}>
                    {items.map((item, index) => (
                        <ShopItemPreview
                            {...item.common}
                            key={index}
                            width={width}
                            height={height}
                            itemRef={elemRef}
                        />
                    ))}
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