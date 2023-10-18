import {FC} from 'react'

import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.hook'
import {locales} from 'app/_common/content/locale/locale.content'
import Translation from 'app/[locale]/admin/items/_components/item-form/translations/translation/translation.component'
import useTranslations from 'app/[locale]/admin/items/_components/item-form/translations/translations.hook'
const Translations: FC<ItemFormState> = (props) => {
    const {transl} = useTranslations()

    return (
        <div className={'item-form__block'}>
            <div className={'item-form__title'}>{transl.title}</div>
            {locales.map((locale) => (
                <Translation
                    {...props}
                    key={locale}
                    locale={locale}
                />
            ))}
        </div>
    )
}

export default Translations