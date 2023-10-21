import {FC} from 'react'
import Textarea from 'app/_common/components/textarea/textarea.component'
import {
    ItemTranslationProps
} from 'app/[locale]/admin/items/_components/item-form/translations/translation/translation.types'
import Input from 'app/_common/components/input/input.component'
import useTranslation from 'app/[locale]/admin/items/_components/item-form/translations/translation/translation.hook'

const Translation: FC<ItemTranslationProps> = (props) => {
    const {locale} = props
    const {transl, values, errors, onChange} = useTranslation(props)
    
    return (
        <div className={'admin-item-form-block form'}>
            <div className={'form__subtitle'}>
                {transl[locale]}
            </div>
            <Input
                className={'form__input'}
                name={'name'}
                placeholder={`${transl.inputs.name} ${transl[locale]}`}
                value={values.name}
                onChange={onChange}
                error={errors.name}
            />
            <Textarea
                className={'form__textarea'}
                name={'description'}
                placeholder={`${transl.inputs.description} ${transl[locale]}`}
                value={values.description}
                onChange={onChange}
                error={errors.description}
            />
            <Textarea
                className={'form__textarea'}
                name={'composition'}
                placeholder={`${transl.inputs.composition} ${transl[locale]}`}
                value={values.composition}
                onChange={onChange}
                error={errors.composition}
            />
            <Textarea
                className={'form__textarea'}
                name={'parameters'}
                placeholder={`${transl.inputs.parameters} ${transl[locale]}`}
                value={values.parameters}
                onChange={onChange}
                error={errors.parameters}
            />
        </div>
    )
}

export default Translation