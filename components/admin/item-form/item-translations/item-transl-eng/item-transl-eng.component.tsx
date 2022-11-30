import {FC} from 'react'
import React from 'react'
import ItemTransl from 'components/admin/item-form/item-translations/item-transl/item-transl.component'
import useItemTranslEng from 'components/admin/item-form/item-translations/item-transl-eng/item-transl-eng.hook'
import {ItemCommonTranslLocale} from 'components/admin/item-form/item-translations/item-translations.types'

const ItemTranslEng: FC<ItemCommonTranslLocale> = (props) => {
    const {refObj, ...values} = props
    const {transl, content} = useItemTranslEng()

    return (
        <ItemTransl
            values={values}
            locale={'eng'}
            localeTransl={transl.eng}
            content={content.inputs}
            refObj={refObj}
        />
    )
}

export default ItemTranslEng