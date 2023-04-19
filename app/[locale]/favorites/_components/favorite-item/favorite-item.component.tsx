import {FC} from 'react'
import ShopItemPreview from 'app/[locale]/_common/components/shop-item-preview/shop-item-preview.component'
import {FavoriteItemProps} from 'app/[locale]/favorites/_components/favorite-item/favorite-item.types'
import useFavoriteItem from 'app/[locale]/favorites/_components/favorite-item/favorite-item.hook'
import FavoriteLike from 'app/[locale]/_common/components/favorite-like/favorite-like.component'

const FavoriteItem: FC<FavoriteItemProps> = (props) => {
    const {item, width} = props
    const {locale} = useFavoriteItem(props)

    return (
        <div className={'favorites-item'}>
            <ShopItemPreview
                className={'favorites-item__preview'}
                {...item.common}
                width={width || 0}
                height={width * 4 / 3 || 0}
            />
            <div className={'favorites-item__bottom'}>
                <div className="favorites-item__name">
                    {item.translations[locale].name}
                </div>
                <div className="favorites-item__price">
                    {item.common.price} ₴
                </div>
                <FavoriteLike
                    className={'favorites-item__button'}
                    color={item.common.color}
                    id={item._id}
                    liked={true}
                />
            </div>
        </div>
    )
}

export default FavoriteItem