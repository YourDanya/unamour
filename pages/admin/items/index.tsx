import {NextPage} from 'next'
import useAdminItems from 'pages/admin/items/admin-items.hook'
import ItemForm from 'components/admin/item-form/item-form.component'
import Spinner from 'components/common/spinner/spinner.component'
import Pagination from 'components/common/pagination/pagination.component'
import Button from 'components/common/button/button.component'

const AdminItems: NextPage = () => {
    const {items, user, toAddItem, onAddItem, transl} = useAdminItems()

    return (
        <div className={'admin-items'}>
            {items.length > 0 && user?.isAdmin ? (
                <div className={'admin-items__list container'}>
                    <Pagination className={'admin-items__pagination'}>
                        {items.map((item, index) => (
                            <ItemForm
                                className={index === items.length - 1 && toAddItem === null ? 'admin-items__last-item' : ''}
                                key={`${item.common.slug}${index}`}
                                itemIndex={index}
                                {...item}
                            />
                        ))}
                        {toAddItem !== null && (
                            <ItemForm
                                toAddItem={true}
                                className={'admin-items__last-item'}
                                itemIndex={items.length}
                                {...toAddItem}
                            />
                        )}
                    </Pagination>
                    <Button className={'admin-items__button'} onClick={onAddItem}>
                        {transl.create}
                    </Button>
                </div>
            ) : (
                <Spinner className={'admin-items__spinner'}/>
            )}
        </div>
    )
}

export default AdminItems