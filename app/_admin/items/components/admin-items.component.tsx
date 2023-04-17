import Button from 'components/common/button/button.component'
import Spinner from 'components/common/spinner/spinner.component'
import PaginationArray from 'components/common/pagination/pagination-array/pagination-array.component'
import {FC} from 'react'
import useAdminItems from 'app/_admin/items/components/admin-items.hook'
import ItemForm from 'app/_admin/items/components/item-form/item-form.component'


const AdminItems: FC = () => {
    const {items, user, onAddItem, transl} = useAdminItems()

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
                    {/*<FormMessage error={itemError}/>*/}
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