import {FC} from 'react'
import ItemImage
    from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-images/item-image/item-image.component'
import Button from 'app/_common/components/button/button.component'
import useItemImages
    from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-images/item-images.hook'
import {
    ItemImagesProps
} from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variant/item-images/item-images.types'
import FormMessage from 'app/_common/components/form-message/form-message.component'

const ItemImages:FC<ItemImagesProps> = (props) => {
    const {
        onUpdateImage, onDeleteImage, onAddImage, onSelect, values, btnRef, transl, imagesError
    } = useItemImages(props)

    return (
        <div>
            {values && Object.entries(values).map(([id, {file, url}]) => (
                <ItemImage
                    key={id}
                    id={id}
                    file={file}
                    url={url}
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
        </div>
    )
}

export default ItemImages