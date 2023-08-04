import Input from 'app/_common/components/input-v2/input.component'
import Button from 'app/_common/components/button/button.component'
import FormMessage from 'app/_common/components/form-message/form-message.component'
import useGetUsers
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/get-users/get-users.hook'
import Description
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/description/description.component'
import {User} from 'app/_common/store/user/user.types'

const GetUsers = () => {
    const state = useGetUsers()
    const {transl, onGetUsers, getUsers, searchName, mappedGetUsers, onChange, users} = state

    return (
        <div className={'review-form-block form review-form-get-users get-users'}>
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
            <Description className={'get-users__descr'}>
                {transl.name.descr}
            </Description>
            <Button className={'form__button'} onClick={onGetUsers}>
                {transl.getUsers}
            </Button>
            <FormMessage
                className={'form__message'}
                error={mappedGetUsers.error}
                success={mappedGetUsers.success}
            />
            <Users {...state}/>
        </div>
    )
}

export default GetUsers

const Users = (props: ReturnType<typeof useGetUsers>) => {
    const {users, transl} = props

    return (
        <>
            {users && (
                <div className={'review-form-users users'}>
                    <div className={'users__row'}>
                        <div className={'users__cell users__cell--names users__name'}>
                            {transl.userName}
                        </div>
                        <div className={'users__cell users__cell--names users__email'}>
                            {transl.userEmail}
                        </div>
                    </div>
                    {users.map(user => (
                        <div className={'users__row'} key={user.email}>
                            <div className={'users__cell users__name'}>
                                {user.name}
                            </div>
                            <div className={'users__cell users__email'}>
                                {user.email}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
