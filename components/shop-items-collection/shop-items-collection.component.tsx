import {FC} from 'react'
import {ItemsCollectionProps} from 'components/shop-items-collection/shop-items-collection.types'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'

const ShopItemsCollection: FC<ItemsCollectionProps> = ({items, title}) => {

    return (
        <div className={'shop-items-collection'}>
            <div className="shop-items-collection__title">
                {title}
            </div>
            <div className={'shop-items-collection__items'}>
                {items && items.map((props, index) => (
                    <div className='shop-items-collection__item' key={props.common.slug + index}>
                        <ShopItemPreview {...props}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopItemsCollection