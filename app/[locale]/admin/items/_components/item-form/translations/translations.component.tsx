import {FC} from 'react'

import {locales} from 'app/_common/content/locale/locale.content'
import Translation from 'app/[locale]/admin/items/_components/item-form/translations/translation/translation.component'
import useTranslations from 'app/[locale]/admin/items/_components/item-form/translations/translations.hook'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
const Translations: FC<ItemFormState> = (props) => {
    const {transl} = useTranslations()

    return (
        <div className={'admin-item-form-block form'}>
            <div className={'form__title'}>{transl.title}</div>
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