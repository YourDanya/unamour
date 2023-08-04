import {ChangeEvent} from 'react'
import {UseInputInputs} from 'app/_common/hooks/input/input.types'
import CartContent from 'app/[locale]/cart/_components/cart.content'

export type CartFormProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    transl: typeof CartContent.translations['ua'],
    content: typeof CartContent.common,
    inputs: UseInputInputs<typeof CartContent.common.inputs>
    onValidate: ((name: string) => void),
}