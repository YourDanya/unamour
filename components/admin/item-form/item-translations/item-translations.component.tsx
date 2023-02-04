import {FC, memo} from 'react'
import useItemTranslations from 'components/admin/item-form/item-translations/item-translations.hook'
import {ItemTranslationsProps} from 'components/admin/item-form/item-translations/item-translations.types'
import {Locale} from 'types/types'
import ItemTranslation from 'components/admin/item-form/item-translation/item-translation.component'

const ItemTranslations: FC<ItemTranslationsProps> = (props) => {
    const {translations, itemValueRef, itemErrRef} = props
    const {transl} = useItemTranslations()

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>{transl.title}</div>
            {Object.entries(translations).map(([locale, values]) => (
                <ItemTranslation
                    key={locale}
                    locale={locale as Locale}
                    itemErrRef={itemErrRef}
                    itemValueRef={itemValueRef}
                    values={values}
                />
            ))}
        </div>
    )
}

export default memo(ItemTranslations)