import {FC} from 'react'
import React from 'react'
import useItemTranslRu from 'components/admin/item-form/item-translations/item-transl-ru/item-transl-ru.hook'
import ItemTransl from 'components/admin/item-form/item-translations/item-transl/item-transl.component'
import {ItemCommonTranslLocale} from 'components/admin/item-form/item-translations/item-translations.types'

const ItemTranslRu: FC<ItemCommonTranslLocale> = (props) => {
    const {refObj, ...values} = props
    const {transl, content} = useItemTranslRu()

    return (
        <ItemTransl
            values={values}
            locale={'ru'}
            localeTransl={transl.ru}
            content={content.inputs}
            refObj={refObj}
        />
    )
}

export default ItemTranslRu