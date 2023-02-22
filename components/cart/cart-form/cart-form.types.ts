import {ChangeEvent} from 'react'
import CartFormContent from 'components/cart/cart-form/cart-form.content'
import {UseInputInputs} from 'hooks/input/input.types'

export type CartFormProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    transl: typeof CartFormContent.translations['ua'],
    content: typeof CartFormContent.common,
    inputs: UseInputInputs<typeof CartFormContent.common.inputs>
    onValidate: ((name: string) => void),
}