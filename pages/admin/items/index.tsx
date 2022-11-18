import React from 'react'
import {NextPage} from 'next'
import useAdminItems from 'pages/admin/items/admin-items.hook'
import ItemForm from 'components/admin/item-form/item-form.component'
import Spinner from 'components/common/spinner/spinner.component'

const AdminItems: NextPage = () => {
    const {items, user, getItems} = useAdminItems()

    return (
        <>
            {items.length > 0 && user?.isAdmin ? (
                <div className={'admin-items'}>
                    {items.map((item, index) => index < 10 && (
                        <ItemForm
                            itemIndex={index}
                            key={`${item.common.slug}${index}`}
                            {...item}
                        />
                    ))}
                </div>
            ) : (
                <Spinner className={'admin-spinner'}/>
            )}
        </>
    )
}

export default AdminItems