import {FC} from 'react'
import {ItemsCollectionProps} from 'components/shop-items-collection/shop-items-collection.types'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'
import useShopItemsCollection from 'components/shop-items-collection/shop-items-collection.hook'

const ShopItemsCollection: FC<ItemsCollectionProps> = ({items, title}) => {
    const {itemRef, width} = useShopItemsCollection()

    return (
        <div className={'shop-items-collection'}>
            <div className="shop-items-collection__title">
                {title}
            </div>
            <div className={'shop-items-collection__items'}>
                {items && items.map((props, index) => (
                    <div className='shop-items-collection__item' key={props.common.slug + index}>
                        <ShopItemPreview
                            {...props}
                            width={width}
                            height={width * 4 / 3}
                            itemRef={index === 0 ? itemRef : undefined}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopItemsCollection