import Input from 'app/[locale]/_common/components/input-v2/input.component'
import Button from 'app/[locale]/_common/components/button/button.component'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import useGetUsers
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/get-users/get-users.hook'

const GetUsers = () => {
    const {transl, onGetUsers, getUsers, searchName, mappedGetUsers, onChange} = useGetUsers()

    return (
        <div className={'admin-review-form-block admin-review-form-get-users form'}>
            <div className={'form__subtitle'}>
                {transl.getUsers}
            </div>
            <label htmlFor={'name'} className={'form__label'}>
                {transl.name.label}
            </label>
            <Input
                className={'form__input'}
                name={'name'}
                value={searchName}
                onChange={onChange}
            />
            <Button className={'form__button'} onClick={onGetUsers}>
                {transl.getUsers}
            </Button>
            <FormMessage
                className={'form__message'}
                error={mappedGetUsers.error}
                success={mappedGetUsers.success}
            />
        </div>
    )
}

export default GetUsers