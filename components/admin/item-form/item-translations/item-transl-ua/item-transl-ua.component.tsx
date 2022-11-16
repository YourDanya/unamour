import {FC} from 'react'
import React from 'react'
import useItemTranslUa from 'components/admin/item-form/item-translations/item-transl-ua/item-transl-ua.hook'
import ItemTransl from 'components/admin/item-form/item-translations/item-transl/item-transl.component'
import {ItemCommonTranslLocale} from 'components/admin/item-form/item-translations/item-translations.types'

const ItemTranslUa: FC<ItemCommonTranslLocale> = (props) => {
    const {refObj, ...values} = props
    const {transl, content} = useItemTranslUa()

    return (
        <ItemTransl values={values} locale={transl.ua} content={content.inputs} refObj={refObj}/>
    )
}

export default ItemTranslUa