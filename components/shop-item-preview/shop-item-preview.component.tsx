import {FC} from 'react'
import useShopItemPreview from 'components/shop-item-preview/shop-item-preview.hook'
import Link from 'next/link'
import {ShopItemPreviewProps} from 'components/shop-item-preview/shop-item-preview.types'
import Image from 'next/image'
import {baseURL} from 'utils/api/api.utils'

const ShopItemPreview: FC<ShopItemPreviewProps> = (props) => {
    const {common: {images, price, slug, slugCategory, color}, itemRef, height, width} = props
    const {onMouse, hovered, transl} = useShopItemPreview(props)

    return (
        <div className="shop-item-preview" ref={itemRef}>
            <Link
                href={`/shop-items/${slugCategory}/${slug}?color=${color}`}
                className={`shop-item-preview__link`}
                onMouseLeave={onMouse}
                onMouseEnter={onMouse}
            >
                <Image
                    src={`${baseURL}/images/${images[0]}`}
                    alt={'shop item preview image'}
                    width={width}
                    height={height}
                    style={{
                        objectFit: 'cover', objectPosition: 'center', cursor: 'pointer', transition: '0.4s opacity',
                        ... hovered && {position: 'absolute', top: 0, left: 0, opacity: 0}
                    }}
                />
                <Image
                    src={`${baseURL}/images/${images[1]}`}
                    alt={'shop item preview image'}
                    width={width}
                    height={height}
                    style={{
                        objectFit: 'cover', objectPosition: 'center', cursor: 'pointer', transition: '0.4s opacity',
                        ... !hovered && {position: 'absolute', top: 0, left: 0, opacity: 0}
                    }}
                />
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