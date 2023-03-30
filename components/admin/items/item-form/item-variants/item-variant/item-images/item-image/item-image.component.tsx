import {FC} from 'react'
import Button from 'components/common/button/button.component'
import React from 'react'
import {baseURL} from 'utils/api/api.utils'
import {
    ItemImageProps
} from 'components/admin/items/item-form/item-variants/item-variant/item-images/item-image/item-image.types'
import useItemImage
    from 'components/admin/items/item-form/item-variants/item-variant/item-images/item-image/item-image.hook'

const ItemImage: FC<ItemImageProps> = (props) => {
    const {transl, onUpdate, url, onDelete} = useItemImage(props)

    return (
        <div className={'item-form__image-wrapper'}>
            <img
                className={'item-form__image'}
                src={url.includes('http') ? url : `${baseURL}/images/${url}`}
                alt={'preview image'}
            />
            <Button className={'item-form__button'} onClick={onUpdate}>
                {transl.updateImage}
            </Button>
            <Button className={'item-form__button'} onClick={onDelete}>
                {transl.deleteImage}
            </Button>
        </div>
    )
}

export default ItemImage