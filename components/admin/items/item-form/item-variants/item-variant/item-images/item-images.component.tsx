import {FC} from 'react'
import ItemImage
    from 'components/admin/items/item-form/item-variants/item-variant/item-images/item-image/item-image.component'
import Button from 'components/common/button/button.component'
import React from 'react'
import {
    ItemImagesProps
} from 'components/admin/items/item-form/item-variants/item-variant/item-images/item-images.types'
import useItemImages from 'components/admin/items/item-form/item-variants/item-variant/item-images/item-images.hook'
import FormMessage from 'components/common/form-message/form-message.component'

const ItemImages:FC<ItemImagesProps> = (props) => {
    const {
        onUpdateImage, onDeleteImage, onAddImage, onSelect, values, btnRef, transl, imagesError
    } = useItemImages(props)

    return (
        <>
            {values && Object.entries(values).map(([id, file]) => (
                <ItemImage
                    key={id}
                    id={id}
                    file={file}
                    onUpdateImage={onUpdateImage}
                    onDeleteImage={onDeleteImage}
                />
            ))}
            <Button className={'item-form__button'} onClick={onAddImage}>
                {transl.addImage}
            </Button>
            <FormMessage error={imagesError}/>
            <input
                ref={btnRef}
                type="file"
                onChange={onSelect}
                accept="image/*"
                style={{display: 'none'}}
                value={undefined}
            />
        </>
    )
}

export default ItemImages