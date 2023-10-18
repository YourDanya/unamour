import {FC} from 'react'
import useItemTranslations from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translations.hook'
import ItemTranslation
    from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translation/item-translation.component'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import {locales} from 'app/_common/content/locale/locale.content'

const ItemTranslations: FC<ItemFormState> = (props) => {
    const {transl} = useItemTranslations()

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>{transl.title}</div>
            {locales.map((locale) => (
                <ItemTranslation
                    {...props}
                    key={locale}
                    locale={locale}
                />
            ))}
        </div>
    )
}

export default ItemTranslations