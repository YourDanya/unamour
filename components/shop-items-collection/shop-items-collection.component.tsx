import React from 'react'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'
import {ClientItem} from 'redux/shop-items/shop-items.types'

interface itemsCollectionProps {
    items: ClientItem[],
    title: string,
}

const ShopItemsCollection: React.FC<itemsCollectionProps> = ({items, title}) => {

    return (
        <div className={'shop-items-collection'}>
            <div className="shop-items-collection__title">
                {title}
            </div>
            <div className={'shop-items-collection__items'}>
                {items && items.map((props, index) => (
                    <div className='shop-items-collection__item' key={props.slug + index}>
                        <ShopItemPreview {...props}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopItemsCollection