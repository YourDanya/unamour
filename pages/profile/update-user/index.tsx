import React from 'react'
import lock from 'public/icons/lock.svg'
import {NextPageWithLayout} from 'types/types'
import useUpdateUser from 'pages/profile/update-user/update-user.hook'
import Button from 'components/common/button/button.component'
import {getProfileLayout} from 'components/profile/profile.component'
import Input from 'components/common/input/input.component'

type UpdateUserProps = {}

const UpdateUser: NextPageWithLayout<UpdateUserProps> = () => {

    const {inputs, transl, handleChange, handleSubmit, handleValidate} = useUpdateUser()

    return (
        <div className={'update-user'}>
            <form className={'update-user__form'}>
                <div className={'update-user__title'}>{transl.title}</div>
                <Input
                    className={'update-user__input update-user__name'}
                    name={'name'}
                    handleChange={handleChange}
                    placeholder={transl.inputs.name}
                    value={inputs.values.name}
                    error={inputs.errors.name}
                    handleValidate={handleValidate}
                />
                <Input
                    className={'update-user__input update-user__surname'}
                    name={'surname'}
                    handleChange={handleChange}
                    placeholder={transl.inputs.surname}
                    value={inputs.values.surname}
                    error={inputs.errors.surname}
                    handleValidate={handleValidate}
                />
                <Input
                    className={'update-user__input update-user__email'}
                    name={'email'}
                    handleChange={handleChange}
                    placeholder={transl.inputs.email}
                    value={inputs.values.email}
                    error={inputs.errors.email}
                    handleValidate={handleValidate}
                />
                <Input
                    className={'update-user__input update-user__phone'}
                    name={'phone'}
                    handleChange={handleChange}
                    placeholder={transl.inputs.phone}
                    value={inputs.values.phone}
                    error={inputs.errors.phone}
                    handleValidate={handleValidate}
                />
                <Input
                    className={'update-user__input update-user__birthDate'}
                    name={'birthDate'}
                    placeholder={transl.inputs.birthDate}
                    handleChange={handleChange}
                    value={inputs.values.birthDate}
                    error={inputs.errors.birthDate}
                    handleValidate={handleValidate}
                />
                <Button className={'update-user__button'} onClick={handleSubmit}>
                    {transl.save}
                </Button>
            </form>
            <div className={'update-user__change-pass'}>
                <div className={'update-user__change-pass-title'}>
                    {transl.password}
                </div>
                <Button className={'update-user__change-pass-btn'} onClick={() => {}}>
                    <img className={'update-user__change-pass-img'} src={lock.src}/>
                    <div className={'update-user__change-pass-text'}>{transl.changePassword}</div>
                </Button>
            </div>
        </div>
    )
}

UpdateUser.getLayout = getProfileLayout

export default UpdateUser
