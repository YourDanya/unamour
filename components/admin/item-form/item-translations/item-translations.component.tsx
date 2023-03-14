import {FC} from 'react'
import useItemTranslations from 'components/admin/item-form/item-translations/item-translations.hook'
import ItemTranslation from 'components/admin/item-form/item-translations/item-translation/item-translation.component'
import {Locale} from 'types/types'

const ItemTranslations: FC = () => {
    const {transl, translations} = useItemTranslations()

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>{transl.title}</div>
            {Object.entries(translations).map(([locale, values]) => (
                <ItemTranslation
                    key={locale}
                    locale={locale as Locale}
                />
            ))}
        </div>
    )
}

export default ItemTranslations