'use client'

import Image from 'next/image'
import {baseURL} from 'app/[locale]/_common/utils/api/api.utils'
import useShopItemPreview from 'app/[locale]/_common/components/shop-item-preview/shop-item-preview.hook'
import {FC} from 'react'
import {ShopItemPreviewProps} from 'app/[locale]/_common/components/shop-item-preview/shop-item-preview.types'
import Link from 'next/link'
import LoadImage from 'app/[locale]/_common/components/load-image-v2/load-image.component'

const ShopItemPreview: FC<ShopItemPreviewProps> = (props) => {
    const {images, slug, slugCategory, color, itemRef, height, width, className} = props
    const {onMouse, hovered} = useShopItemPreview(props)

    return (
        <div className={`shop-item-preview ${className ? className : ''}`} ref={itemRef}>
            <Link
                href={`/shop-items/${slugCategory}/${slug}?color=${color}`}
                className={`shop-item-preview__link`}
                onMouseLeave={onMouse}
                onMouseEnter={onMouse}
                prefetch={false}
            >
                <LoadImage
                    src={`${images[0].url}`}
                    className={`shop-item-preview__img ${hovered? 'shop-item-preview__img--hidden' : ''}`}
                    alt={'shop item preview image'}
                    height={height}
                    quality={100}
                    ratio={4 / 3}
                />
                <LoadImage
                    src={`${images[1].url}`}
                    className={`shop-item-preview__img ${!hovered? 'shop-item-preview__img--hidden' : ''}`}
                    ratio={4 / 3}
                    alt={'shop item preview image'}
                    height={height}
                    quality={100}
                />
            </Link>
        </div>
    )
}

export default ShopItemPreview
