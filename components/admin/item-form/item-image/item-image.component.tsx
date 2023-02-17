import {FC} from 'react'
import Button from 'components/common/button/button.component'
import React from 'react'
import useItemImage from 'components/admin/item-form/item-image/item-image.hook'
import {ItemImageProps} from 'components/admin/item-form/item-image/item-image.types'

const ItemImage: FC<ItemImageProps> = (props) => {
    const {transl, btnRef, onUpdate, onSelect, url} = useItemImage(props)

    return (
        <div className={'item-form__image-wrapper'}>
            <img className={'item-form__image'} src={url}/>
            <Button className={'item-form__button'} onClick={onUpdate}>
                {transl.updateImage}
            </Button>
            <Button className={'item-form__button'} onClick={() => {}}>
                {transl.deleteImage}
            </Button>
            <input
                ref={btnRef}
                type="file"
                onChange={onSelect}
                accept="image/*"
                style={{display: 'none'}}
            />
        </div>
    )
}

export default ItemImage