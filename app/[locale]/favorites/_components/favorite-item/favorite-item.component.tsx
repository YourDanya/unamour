import {FC} from 'react'
import ShopItemPreview from 'app/_common/components/shop-item-preview/shop-item-preview.component'
import {FavoriteItemProps} from 'app/[locale]/favorites/_components/favorite-item/favorite-item.types'
import useFavoriteItem from 'app/[locale]/favorites/_components/favorite-item/favorite-item.hook'
import FavoriteLike from 'app/_common/components/favorite-like/favorite-like.component'
import Button from 'app/_common/components/button/button.component'

const FavoriteItem: FC<FavoriteItemProps> = (props) => {
    const {item, height, itemRef} = props
    const {locale} = useFavoriteItem(props)

    return (
        <div className={'favorites-item'}>
            <ShopItemPreview
                className={'favorites-item__preview'}
                {...item}
                height={height}
                itemRef={itemRef}
            />
            <div className={'favorites-item__bottom'}>
                <div className="favorites-item__name">
                    {item.translations[locale].name}
                </div>
                <div className="favorites-item__price">
                    {item.price} ₴
                </div>
                <FavoriteLike
                    className={'favorites-item__button'}
                    color={item.color}
                    id={item._id}
                    liked={true}
                />
            </div>
        </div>
    )
}
export default FavoriteItem