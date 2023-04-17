import {ChangeEvent} from 'react'
import {UseInputInputs} from 'hooks/input/input.types'
import CartContent from 'pages/cart/cart.content'

export type CartFormProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    transl: typeof CartContent.translations['ua'],
    content: typeof CartContent.common,
    inputs: UseInputInputs<typeof CartContent.common.inputs>
    onValidate: ((name: string) => void),
}