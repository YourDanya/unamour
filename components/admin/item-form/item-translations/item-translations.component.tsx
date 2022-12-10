import {FC} from 'react'
import ItemTranslUa from 'components/admin/item-form/item-translations/item-transl-ua/item-transl-ua.component'
import ItemTranslRu from 'components/admin/item-form/item-translations/item-transl-ru/item-transl-ru.component'
import ItemTranslEng from 'components/admin/item-form/item-translations/item-transl-eng/item-transl-eng.component'
import useItemTranslations from 'components/admin/item-form/item-translations/item-translations.hook'
import {ItemTranslationProps} from 'components/admin/item-form/item-translations/item-translations.types'

const ItemTranslations: FC<ItemTranslationProps> = (props) => {
    const {translations: {ua, eng, ru}, itemValueRef} = props
    const {transl} = useItemTranslations()

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>{transl.title}</div>
            <ItemTranslUa {...ua} itemValueRef={itemValueRef}/>
            <ItemTranslEng {...eng} itemValueRef={itemValueRef}/>
            <ItemTranslRu {...ru} itemValueRef={itemValueRef}/>
        </div>
    )
}

export default ItemTranslations