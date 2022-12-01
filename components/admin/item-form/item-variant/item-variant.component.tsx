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
    const {onInputsChange, onSizesChange, transl, sizeValues, colors, inputs, imageValues,
        onDeleteImage, onSaveImage, onAddImage, onDeleteVariant} = useItemVariant(props)

    return (
        <div className={'item-form__variant'}>
            <div className={'item-form__subtitle'}>
                {transl.variant}
            </div>
            {/*price*/}
            <Input
                className={'item-form__input'}
                name={'price'}
                placeholder={transl.inputs.price}
                value={inputs.values.price}
                onChange={onInputsChange}
            />
            {/*color*/}
            <Dropdown className={'item-form__dropdown'} name={transl.color} >
                <RadioButtons
                    className={'item-form__radio'}
                    name={'color'}
                    labels={colors.labels}
                    values={colors.values}
                    onChange={onInputsChange}
                    active={inputs.values.color}
                    styles={colors.styles}
                />
                {/*{colors.codes.map((code, index) => (*/}
                {/*    <div*/}
                {/*        className={'item-form__color'}*/}
                {/*        style={{backgroundColor: code}}*/}
                {/*        key={index}*/}
                {/*    />*/}
                {/*))}*/}
            </Dropdown>
            {/*sizes*/}
            <Dropdown className={'item-form__dropdown'} name={transl.sizes}>
                {Object.entries(sizeValues).map(([key, value], index,  arr) => (
                    <Checkbox
                        className={`item-form__check ${index === arr.length - 1 ? 'item-form__check--last' : ''}`}
                        key={key}
                        name={key}
                        label={key}
                        value={value}
                        onChange={onSizesChange}
                    />
                ))}
            </Dropdown>
            {/*images*/}
            <Dropdown className={'item-form__dropdown'} name={transl.images}>
                {imageValues.map((url, index,arr) => (
                    <UpdateInput
                        className={`item-form__image ${index === arr.length - 1 ? 'item-form__image--last' : ''}`}
                        value={url}
                        index={index}
                        onDelete={onDeleteImage}
                        onSave={onSaveImage}
                        key={index}
                    />
                ))}
                <Input
                    className={'item-form__input'}
                    name={'newImage'}
                    placeholder={transl.inputs.newImage}
                    value={inputs.values.newImage}
                    onChange={onInputsChange}
                />
                <Button className={'item-form__button'} onClick={onAddImage}/>
            </Dropdown>
            <Button className={'item-form__button'} onClick={onDeleteVariant}>
                {transl.delete}
            </Button>
        </div>
    )
}

export default ItemVariant