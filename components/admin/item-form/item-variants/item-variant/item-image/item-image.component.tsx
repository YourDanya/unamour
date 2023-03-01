import {FC} from 'react'
import Button from 'components/common/button/button.component'
import React from 'react'
import useItemImage from 'components/admin/item-form/item-image/item-image.hook'
import {ItemImageProps} from 'components/admin/item-form/item-image/item-image.types'
import {baseURL} from 'utils/api/api.utils'

const ItemImage: FC<ItemImageProps> = (props) => {
    const {transl, onUpdate, url, onDelete} = useItemImage(props)

    return (
        <div className={'item-form__image-wrapper'}>
            <img className={'item-form__image'} src={url.includes('http') ? url : `${baseURL}/images/${url}`}/>
            <Button className={'item-form__button'} onClick={onUpdate}>
                {transl.updateImage}
            </Button>
            <Button className={'item-form__button'} onClick={onDelete}>
                {transl.deleteImage}
            </Button>
            {/*<input*/}
            {/*    type="file"*/}
            {/*    onChange={onUpdate}*/}
            {/*    accept="image/*"*/}
            {/*    style={{display: 'none'}}*/}
            {/*/>*/}
        </div>
    )
}

export default ItemImage