import React from 'react'
import {NextPage} from 'next'
import useAdminItems from 'pages/admin/items/admin-items.hook'
import ItemForm from 'components/admin/item-form/item-form.component'
import Spinner from 'components/common/spinner/spinner.component'
import Pagination from 'components/common/pagination/pagination.component'

const AdminItems: NextPage = () => {
    const {items, user, getItems} = useAdminItems()

    return (
        <>
            {items.length > 0 && user?.isAdmin ? (
                <div className={'admin-items'}>
                    <Pagination>
                        {items.map((item, index) => (
                            <ItemForm
                                key={`${item.common.slug}${index}`}
                                {...item}
                            />
                        ))}
                    </Pagination>
                </div>
            ) : (
                <Spinner className={'admin-spinner'}/>
            )}
        </>
    )
}

export default AdminItems