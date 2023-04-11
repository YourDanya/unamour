import useAdminItems from 'components/admin/items/admin-items.hook'
import ItemForm from 'components/admin/items/item-form/item-form.component'
import Spinner from 'components/common/spinner/spinner.component'
import Button from 'components/common/button/button.component'
import FormMessage from 'components/common/form-message/form-message.component'
import {FC} from 'react'
import PaginationArray from 'components/common/pagination/pagination-array/pagination-array.component'

const AdminItems: FC = () => {
    const {items, user, onAddItem, transl, itemError} = useAdminItems()

    return (
        <div className={'admin-items'}>
            {items.length > 0 && user?.isAdmin ? (
                <div className={'admin-items__list container'}>
                    <PaginationArray
                        className={'admin-items__pagination'}
                        Component={ItemForm}
                        arr={items}
                    />
                    <Button className={'admin-items__button'} onClick={onAddItem}>
                        {transl.create}
                    </Button>
                    <FormMessage error={itemError}/>
                </div>
            ) : (
                <Spinner className={'admin-items__spinner'}/>
            )}
        </div>
    )
}

export default AdminItems

{/*    {items.map((item, index) => index === 0 && (*/}
{/*        <ItemForm*/}
{/*            key={item._id}*/}
{/*            className={index === items.length - 1 ? 'admin-items__last-item' : ''}*/}
{/*            itemIndex={index}*/}
{/*            item={item}*/}
{/*        />*/}
{/*    ))}*/}
{/*</PaginationArray>*/}