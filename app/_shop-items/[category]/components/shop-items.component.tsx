import {NextPageWithLayout} from 'types/types'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'
import useShopItems from 'app/_shop-items/[category]/components/shop-items.hook'
import {ShopItemsProps} from 'app/_shop-items/[category]/components/shop-items.types'

const ShopItems: NextPageWithLayout<ShopItemsProps> = (props) => {
    const {transl, items, width, locale, elemRef} = useShopItems(props)

    return (
        <div className={'shop-items'}>
            {items && items.length > 0 ? (
                <div className={'shop-items__collection'}>
                    <div className="shop-items__title">
                        {transl.title}
                    </div>
                    <div className={'shop-items__items'}>
                        {items && items.map((props, index) => (
                            <div className='shop-items__item' key={props.common.slug + index}>
                                <ShopItemPreview
                                    {...props.common}
                                    width={width}
                                    height={width * 4 / 3}
                                    itemRef={index === 0 ? elemRef : undefined}
                                />
                                <div className={'shop-items__bottom'}>
                                    <div className="shop-items__name">
                                        {props.translations[locale].name}
                                    </div>
                                    <div className="shop-items__price">
                                        {props.common.price} ₴
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={'shop-items__not-found'}>
                    {transl.notFound}
                </div>
            )}
        </div>
    )
}

export default ShopItems