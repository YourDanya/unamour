'use client'

import {useSearchParams} from 'next/navigation'
import {useUrlStore} from 'app/[locale]/_store/url/url.store'
import Slider from 'app/[locale]/_common/components/slider/slider-v2.component'
import 'app/[locale]/test/test.styles.sass'
import {useFormik} from 'formik'
import {FormikProps} from 'formik'
import {ChangeEvent} from 'react'
import Input from 'app/[locale]/_common/components/input/input.component'
import Textarea from 'app/[locale]/_common/components/textarea/textarea.component'
import {FC} from 'react'
import Checkbox from 'app/[locale]/_common/components/checkbox/checkbox.component'
import {TranslInputs} from 'app/[locale]/_common/hooks/input/input.types'
import {object} from 'prop-types'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {createFromEntries} from 'app/[locale]/_common/utils/main/main.utils'

export type OnInputChange = (event: ChangeEvent<HTMLInputElement>) => void
export type OnTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => void

export type InputProps = {
    placeholder: string;
    name: string;
    value: string | number;
    className?: string;
    error?: string | null;
    label?: string;
    type: string;
    onChange: OnTextAreaChange | OnInputChange
}

export type ITodoCreate = {
    name: string,
    description: string,
    isCompleted: boolean,
    isPrivate: boolean
}

export type Valids = Record<string, string | number | boolean>
export type ValidsRec = Record<string, Valids>

export type Values = Record<string, string | number | boolean>

const symbol = (number: number) => {
    const lastChar = number % 10
    if (lastChar === 1) {
        return ''
    } else {
        return 's'
    }
}

const validate = (
    {value, validations, name, values}: { value: string, validations: Valids, name: string, values?: Values }
) => {
    let error
    loop: for (let valName in validations) {
        let valValue = validations[valName]
        switch (valName) {
            case ('required'): {
                if (value === '' || value === null || value === undefined) {
                    error = 'This Field is required.'
                    break loop
                }
                break
            }
            case ('isEmail') : {
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    error = 'Enter a valid email.'
                    break loop
                }
                break
            }
            case ('isNumber') : {
                if (!/^\d+(\.\d{1,2})?$/.test(value)) {
                    error = 'Enter a number.'
                    break loop
                }
                break
            }
            case ('isNumberGreaterThanZero') : {
                if (!/(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)/.test(value)) {
                    error = 'Enter a number greater than zero.'
                    break loop
                }
                break
            }
            case ('isPhone') : {
                if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(value)) {
                    error = 'Enter a valid number.'
                    break loop
                }
                break
            }
            case ('equalToField') : {
                valValue = valValue as string
                if (value !== values?.[valValue]) {
                    error = `${name} and ${valValue} do not match.`
                    break loop
                }
                break
            }
            case ('minLength') : {
                const minLength = valValue as number
                const end = symbol(minLength)
                if (length < minLength) {
                    error = `The field length must not be less than ${minLength} symbol${end}.`
                    break loop
                }
                break
            }
            case ('maxLength') : {
                const maxLength = valValue as number
                const end = symbol(maxLength)
                if (length > maxLength) {
                    error = `The field length must be less than ${maxLength} symbol${end}.`
                }
            }
        }
    }
    return error
}

const validations = {
    name: {minLength: 3, maxLength: 20},
    description: {isPhone: true},
    isCompleted: {},
    isPrivate: {}
}

const validateAll = (values: Values, validations: ValidsRec) => {
    return createFromEntries(getEntries(values).map(([name, value]) => {
        let error
        if (typeof value === 'string') {
            error = validate({validations: validations[name], name, value})
        } else {
            error = null
        }
        return [name, error]
    }))
}

type Data = { value: string }
type Car = { model: string }

type DataOrCar<T> = T extends string ? Data : Car

function todo<T>(arg: T): DataOrCar<T> {
    if (typeof arg === 'string') {
        return {value: ''} as DataOrCar<T>
    } else {
        return {model: ''} as DataOrCar<T>
    }
}

const Test = () => {
    const formik = useFormik<ITodoCreate>({
        initialValues: {
            name: '',
            description: '',
            isCompleted: false,
            isPrivate: false
        },
        validateOnChange: true,
        validate: (values) => {
            const errors = validateAll(values, validations)
            console.log('errors', errors)
            return errors
        },
        onSubmit: async (todo: ITodoCreate) => {
        },
    })

    return (
        <div className={'test'}>
            <Input
                name={'name'}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}
                placeholder={''}
            />
            <Input
                name={'description'}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.errors.description}
                placeholder={''}
            />
            {/*<Input*/}
            {/*    name={'email'}*/}
            {/*    value={formik.values.description}*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    error={formik.errors.description}*/}
            {/*    placeholder={''}*/}
            {/*/>*/}
            {/*<Input*/}
            {/*    name={'number'}*/}
            {/*    value={formik.values.description}*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    error={formik.errors.description}*/}
            {/*    placeholder={''}*/}
            {/*/>*/}
            <Checkbox
                name={'isCompleted'}
                value={formik.values.isCompleted}
                onChange={formik.handleChange}
                label={'isCompleted'}
            />
            <Checkbox
                name={'isPrivate'}
                value={formik.values.isPrivate}
                onChange={formik.handleChange}
                label={'isPrivate'}
            />
        </div>
    )
}

export default Test
