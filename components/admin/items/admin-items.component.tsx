import useAdminItems from 'components/admin/items/admin-items.hook'
import ItemForm from 'components/admin/items/item-form/item-form.component'
import Spinner from 'components/common/spinner/spinner.component'
import Pagination from 'components/common/pagination/pagination.component'
import Button from 'components/common/button/button.component'
import FormMessage from 'components/common/form-message/form-message.component'
import {AdminItemsContext} from 'components/admin/items/admin-items.context'
import {FC} from 'react'

const AdminItems: FC = () => {
    const {items, user, onAddItem, transl, itemError, providerValue} = useAdminItems()

    return (
        <div className={'admin-items'}>
            {items.length > 0 && user?.isAdmin ? (
                <div className={'admin-items__list container'}>
                    <AdminItemsContext.Provider value={providerValue}>
                        <Pagination className={'admin-items__pagination'}>
                            {items.map((item, index) => index === 0 && (
                                <ItemForm
                                    key={index}
                                    className={index === items.length - 1 ? 'admin-items__last-item' : ''}
                                    itemIndex={index}
                                    item={item}
                                />
                            ))}
                        </Pagination>
                        <Button className={'admin-items__button'} onClick={onAddItem}>
                            {transl.create}
                        </Button>
                        <FormMessage error={itemError}/>
                    </AdminItemsContext.Provider>
                </div>
            ) : (
                <Spinner className={'admin-items__spinner'}/>
            )}
        </div>
    )
}

export default AdminItems