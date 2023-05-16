'use client'

import Image from 'next/image'
import {baseURL} from 'app/[locale]/_common/utils/api/api.utils'
import useShopItemPreview from 'app/[locale]/_common/components/shop-item-preview/shop-item-preview.hook'
import {FC} from 'react'
import {ShopItemPreviewProps} from 'app/[locale]/_common/components/shop-item-preview/shop-item-preview.types'
import Link from 'next/link'

const ShopItemPreview: FC<ShopItemPreviewProps> = (props) => {
    const {images, slug, slugCategory, color, itemRef, height, width, className} = props
    const {onMouse, hovered} = useShopItemPreview()

    return (
        <div className={`shop-item-preview ${className ? className : ''}`} ref={itemRef}>
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
                    quality={100}
                    className={'shop-item-preview_img'}
                    style={{
                        objectFit: 'cover', objectPosition: 'center', cursor: 'pointer', transition: '0.4s opacity',
                        ... hovered && {position: 'absolute', top: 0, left: 0, opacity: 0}
                    }}
                />
                <Image
                    src={`${baseURL}/images/${images[1] ?? images[0]}`}
                    alt={'shop item preview image'}
                    width={width}
                    height={height}
                    quality={100}
                    style={{
                        objectFit: 'cover', objectPosition: 'center', cursor: 'pointer', transition: '0.4s opacity',
                        ... !hovered && {position: 'absolute', top: 0, left: 0, opacity: 0}
                    }}
                />
            </Link>
        </div>
    )
}

export default ShopItemPreview