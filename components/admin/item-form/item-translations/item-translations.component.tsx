import {FC} from 'react'
import ItemTranslUa from 'components/admin/item-form/item-translations/item-transl-ua/item-transl-ua.component'
import ItemTranslRu from 'components/admin/item-form/item-translations/item-transl-ru/item-transl-ru.component'
import ItemTranslEng from 'components/admin/item-form/item-translations/item-transl-eng/item-transl-eng.component'
import {ItemTranslationProps} from 'components/admin/item-form/item-form.types'

const ItemTranslations: FC<ItemTranslationProps> = (props) => {
    const {translations: {ua, eng, ru}, refObj} = props

    return (
        <>
            <ItemTranslUa {...ua} refObj={refObj}/>
            <ItemTranslEng {...eng} refObj={refObj}/>
            <ItemTranslRu {...ru} refObj={refObj}/>
        </>
    )
}

export default ItemTranslations