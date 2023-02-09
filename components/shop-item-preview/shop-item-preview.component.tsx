import {FC} from 'react'
import useShopItemPreview from 'components/shop-item-preview/shop-item-preview.hook'
import LoadImage from 'components/common/load-image/load-image.component'
import Link from 'next/link'
import {CategoryItem} from 'redux/shop-items/shop-items.types'

const ShopItemPreview: FC<CategoryItem> = (props) => {
    const {common: {images, price, slug, slugCategory, color}} = props
    const {onMouse, loaded, handleLoaded, hovered, onClick, transl} = useShopItemPreview(props)

    return (
        <div className='shop-item-preview'>
            <Link href={`/shop-items/${slugCategory}/${slug}?color=${color}`}>
                <a className={`shop-item-preview__link`} onMouseEnter={onMouse} onMouseLeave={onMouse} onClick={onClick}>
                    <LoadImage
                        dataAttr={'0'}
                        loaded={loaded[0]}
                        handleLoaded={handleLoaded}
                        className={`shop-item-preview__img ${hovered ? 'shop-item-preview__img--hidden' : ''}`}
                        src={images[0]}
                        alt="preview item image"
                    />
                    <LoadImage
                        dataAttr={'1'}
                        loaded={loaded[1]}
                        handleLoaded={handleLoaded}
                        className={`shop-item-preview__img ${hovered ? '' : 'shop-item-preview__img--hidden'} `}
                        src={images[1]}
                        alt="preview item image"
                    />
                </a>
            </Link>
            <div className={'shop-item-preview__bottom'}>
                <div className="shop-item-preview__name">
                    {transl.name}
                </div>
                <div className="shop-item-preview__price">
                    {price} ₴
                </div>
            </div>
        </div>
    )
}

export default ShopItemPreview