import {FC} from 'react'
import useReviewForm from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.hook'
import useAdmin from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/admin/admin.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import Description
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/description/description.component'
import Input from 'app/[locale]/_common/components/input-v2/input.component'

const Admin: FC<ReturnType<typeof useReviewForm>> = (props) => {
    const {} = props
    const {transl, onCreateUser, onGetUsers, onUserChange, searchName} = useAdmin()

    return (
        <div className={'review-form-admin admin'}>
            <div className={'admin__subtitle'}>
                {transl.subtitle}
            </div>
            <Button className={'admin__button'} onClick={onGetUsers}>
                {transl.getUsers}
            </Button>
            <label htmlFor={'name'}>
                {transl.name.label}
            </label>
            <Input
                className={'admin__input'}
                name={'name'}
                value={searchName}
                onChange={onUserChange}
            />
            <Description>
                {transl.name.descr}
            </Description>
        </div>
    )
}

export default Admin