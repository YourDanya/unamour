import React from 'react'
import {NextPage} from 'next'
import useAdminItems from 'pages/admin/items/admin-items.hook'
import ItemForm from 'components/admin/item-form/item-form.component'
import Spinner from 'components/common/spinner/spinner.component'

const AdminItems: NextPage = () => {
    const {items, user} = useAdminItems()

    return (
        <>
            {items.length > 0 && user?.isAdmin ? (
                <div className={'admin-items'}>
                    {items.map((item, index) => index === 0 && (
                        <ItemForm key={item.common.slug} {...item}/>
                    ))}
                </div>
            ) : (
                <Spinner className={'admin-spinner'}/>
            )}
        </>
    )
}

export default AdminItems