import RadioButtons from 'components/common/radio-buttons/radio-buttons.component'
import Dropdown from 'components/common/dropdown/dropdown.component'
import Checkbox from 'components/common/checkbox/checkbox.component'
import {FC} from 'react'
import UpdateInput from 'components/common/update-input/update-input.component'
import useItemVariant from 'components/admin/item-form/item-variant/item-variant.hook'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import React from 'react'
import {ItemVariantProps} from 'components/admin/item-form/item-variant/item-variant.types'

const ItemVariant: FC<ItemVariantProps> = (props) => {
    const {} = props
    const {onInputsChange, onSizesChange, transl, sizeValues, colors, inputs, imageValues,
    onDeleteImage, onSaveImage, onAddImage} = useItemVariant(props)

    return (
        <>
            {/*price*/}
            <Input
                className={'item-form__price'}
                name={'price'}
                placeholder={transl.inputs.price}
                value={inputs.values.price}
                onChange={onInputsChange}
            />
            {/*color*/}
            <Dropdown name={transl.color}>
                <RadioButtons
                    name={'color'}
                    labels={colors.labels}
                    values={colors.values}
                    onChange={onInputsChange}
                    active={inputs.values.color}
                >
                    {Object.entries(colors.obj).map(([key, value]) => (
                        <div
                            className={'item-variant__color'}
                            style={{backgroundColor: value.code}}
                            key={key}
                        />
                    ))}
                </RadioButtons>
            </Dropdown>
            {/*sizes*/}
            <Dropdown name={transl.sizes}>
                {Object.entries(sizeValues).map(([key, value], index,  arr) => (
                    <Checkbox
                        className={`item-form__size ${index === arr.length - 1 ? 'item-form__size--last' : ''}`}
                        key={key}
                        name={key}
                        label={key}
                        value={value}
                        onChange={onSizesChange}
                    />
                ))}
            </Dropdown>
            {/*images*/}
            <Dropdown name={transl.images}>
                {imageValues.map((url, index,arr) => (
                    <UpdateInput
                        className={`item-form__image ${index === arr.length - 1 ? 'item-form__image--last' : ''}`}
                        value={url}
                        index={index}
                        onDelete={onDeleteImage}
                        onSave={onSaveImage}
                        key={url}
                    />
                ))}
                <Input
                    className={'item-form__image'}
                    name={'newImage'}
                    placeholder={transl.inputs.newImage}
                    value={inputs.values.newImage}
                    onChange={onInputsChange}
                />
                <Button className={'item-form__price'} onClick={onAddImage}/>
            </Dropdown>
        </>
    )
}

export default ItemVariant