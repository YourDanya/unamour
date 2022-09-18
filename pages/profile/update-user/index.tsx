import React from "react"
import useUpdateUser from "./update-user.hook"
import {NextPageWithLayout} from "../../../types/types"
import Input from "../../../components/common/input/input.component"
import Button from "../../../components/common/button/button.component"
import {getProfileLayout} from "../../../components/profile/profile.component"
import lock from '/public/icons/lock.svg'

type UpdateUserProps = {}

const UpdateUser: NextPageWithLayout<UpdateUserProps> = () => {

    const {
        inputs, translation: {inputs: translInputs, save, changePassword, title, password},
        handleChange, handleSubmit, handleValidate
    } = useUpdateUser()

    return (
        <div className={'update-user'}>
            <form className={'update-user__form'}>
                <div className={'update-user__title'}>{title}</div>
                <Input
                    className={'update-user__input update-user__name'}
                    name={'name'}
                    handleChange={handleChange}
                    placeholder={translInputs.name.placeholder}
                    value={inputs.name.value}
                    error={inputs.name.error}
                    handleValidate={handleValidate}
                />
                <Input
                    className={'update-user__input update-user__surname'}
                    name={'surname'}
                    handleChange={handleChange}
                    placeholder={translInputs.surname.placeholder}
                    value={inputs.surname.value}
                    error={inputs.surname.error}
                    handleValidate={handleValidate}
                />
                <Input
                    className={'update-user__input update-user__email'}
                    name={'email'}
                    handleChange={handleChange}
                    placeholder={translInputs.email.placeholder}
                    value={inputs.email.value}
                    error={inputs.email.error}
                    handleValidate={handleValidate}
                />
                <Input
                    className={'update-user__input update-user__phone'}
                    name={'phone'}
                    handleChange={handleChange}
                    placeholder={translInputs.phone.placeholder}
                    value={inputs.phone.value}
                    error={inputs.phone.error}
                    handleValidate={handleValidate}
                />
                <Input
                    className={'update-user__input update-user__birthDate'}
                    name={'birthDate'}
                    handleChange={handleChange}
                    placeholder={translInputs.birthDate.placeholder}
                    value={inputs.birthDate.value}
                    error={inputs.birthDate.error}
                    handleValidate={handleValidate}
                />
                <Button className={'update-user__button'} onClick={handleSubmit}>
                    {save}
                </Button>
            </form>
            <div className={'update-user__change-pass'}>
                <div className={'update-user__change-pass-title'}>
                    {password}
                </div>
                <Button className={'update-user__change-pass-btn'} onClick={() => {}}>
                    <img className={'update-user__change-pass-img'} src={lock.src}/>
                    <div className={'update-user__change-pass-text'}>{changePassword}</div>
                </Button>
            </div>
        </div>
    )
}

UpdateUser.getLayout = getProfileLayout

export default UpdateUser
