import {FC} from 'react'
import ItemImage from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/image/image.component'
import Button from 'app/_common/components/button/button.component'
import useItemImages from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/images.hook'
import {ImagesProps} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/images.types'
import FormMessage from 'app/_common/components/form-message/form-message.component'

const ItemImages:FC<ImagesProps> = (props) => {
    const {imagesTimeStamp} = props
    const {
        onUpdateImage, onDeleteImage, onAddImage, onSelect, values, btnRef, transl, imagesError
    } = useItemImages(props)

    return (
        <div className={'admin-item-form-block admin-item-form-images form'}>
            {values.map((value, index) => (
                <ItemImage
                    index={index}
                    key={value.url}
                    file={value.file}
                    url={value.url}
                    onUpdateImage={onUpdateImage}
                    onDeleteImage={onDeleteImage}
                    timeStamp={imagesTimeStamp}
                />
            ))}
            <Button className={'form__button'} onClick={onAddImage}>
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