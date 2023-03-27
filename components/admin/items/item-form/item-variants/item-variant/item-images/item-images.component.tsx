import {FC} from 'react'
import ItemImage
    from 'components/admin/items/item-form/item-variants/item-variant/item-images/item-image/item-image.component'
import Button from 'components/common/button/button.component'
import React from 'react'

const ItemImages:FC = () => {
    return (
        <>
            {/*{images.map(({id, value}) => (*/}
            {/*    <ItemImage*/}
            {/*        key={id}*/}
            {/*        id={id}*/}
            {/*        file={value}*/}
            {/*        onUpdateImage={onUpdateImage}*/}
            {/*        onDeleteImage={onDeleteImage}*/}
            {/*    />*/}
            {/*))}*/}
            {/*<Button className={'item-form__button'} onClick={onAddImage}>*/}
            {/*    {transl.addImage}*/}
            {/*</Button>*/}
            {/*<input*/}
            {/*    ref={btnRef}*/}
            {/*    type="file"*/}
            {/*    onChange={onSelect}*/}
            {/*    accept="image/*"*/}
            {/*    style={{display: 'none'}}*/}
            {/*/>*/}
        </>
    )
}

export default ItemImages