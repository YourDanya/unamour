import {FC} from 'react'
import useItemTranslations from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translations.hook'
import ItemTranslation
    from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translation/item-translation.component'
import {memo} from 'react'
import {getKeys} from 'app/[locale]/_common/utils/main/main.utils'

const ItemTranslations: FC = () => {
    const {transl, translations} = useItemTranslations()

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>{transl.title}</div>
            {getKeys(translations).map((locale) => (
                <ItemTranslation
                    key={locale}
                    locale={locale}
                />
            ))}
        </div>
    )
}

export default memo(ItemTranslations)