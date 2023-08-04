import {FC} from 'react'
import Textarea from 'app/_common/components/textarea/textarea.component'
import {
    ItemTranslationProps
} from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translation/item-translation.types'
import useItemTranslation
    from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translation/item-translation.hook'
import Input from 'app/_common/components/input/input.component'

const ItemTranslation: FC<ItemTranslationProps> = (props) => {
    const {locale} = props
    const {transl, values, errors, onChange} = useItemTranslation(props)
    
    return (
        <div className={'item-form__block'}>
            <div className={'item-form__subtitle'}>
                {transl[locale]}
            </div>
            <Input
                className={'item-form__input'}
                name={'name'}
                placeholder={`${transl.inputs.name} ${transl[locale]}`}
                value={values.name}
                onChange={onChange}
                error={errors.name}
            />
            <Textarea
                className={'item-form__textarea'}
                name={'description'}
                placeholder={`${transl.inputs.description} ${transl[locale]}`}
                value={values.description}
                onChange={onChange}
                error={errors.description}
            />
            <Textarea
                className={'item-form__textarea'}
                name={'composition'}
                placeholder={`${transl.inputs.composition} ${transl[locale]}`}
                value={values.composition}
                onChange={onChange}
                error={errors.composition}
            />
            <Textarea
                className={'item-form__textarea'}
                name={'parameters'}
                placeholder={`${transl.inputs.parameters} ${transl[locale]}`}
                value={values.parameters}
                onChange={onChange}
                error={errors.parameters}
            />
            <Textarea
                className={'item-form__textarea'}
                name={'delivery'}
                placeholder={`${transl.inputs.delivery} ${transl[locale]}`}
                value={values.delivery}
                onChange={onChange}
                error={errors.delivery}
            />
        </div>
    )
}

export default ItemTranslation