'use client'

import {FC} from 'react'
import {ResetProps} from 'app/[locale]/_components/layout/nav/nav-auth/login/reset-pass/reset-pass.types'
import Button from 'app/[locale]/_common/components/button/button.component'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import useResetPass from 'app/[locale]/_components/layout/nav/nav-auth/login/reset-pass/reset-pass.hook'
import Input from 'app/[locale]/_common/components/input/input.component'

const ResetPass: FC<ResetProps> = (props) => {
    const {handleResetPass} = props
    const {
        transl, inputs, onChange, onValidate, forgetSubmit, mappedForgetPass
    } = useResetPass()

    return (
        <>
            {!mappedForgetPass.success? (
                <form className={'nav-auth__reset'}>
                    <div className={'nav-auth__explanation'}>
                        {transl.explanation}
                    </div>
                    <Input
                        placeholder={transl.inputs.email}
                        className={'nav-auth__input'}
                        name={'email'}
                        value={inputs.values.email}
                        error={inputs.errors.email}
                        onChange={onChange}
                        onValidate={onValidate}
                    />
                    <div className="nav-auth__bottom">
                        <Button
                            className="nav-auth__button nav-auth__button--reset"
                            onClick={forgetSubmit} loading={mappedForgetPass.loading}
                        >
                            {transl.title}
                        </Button>
                        <Button className="nav-auth__forget" onClick={handleResetPass}>
                            {transl.switch}
                        </Button>
                    </div>
                </form>
            ) : (
                <FormMessage success={mappedForgetPass.success} error={mappedForgetPass.error}/>
            )}
        </>
    )
}

export default ResetPass