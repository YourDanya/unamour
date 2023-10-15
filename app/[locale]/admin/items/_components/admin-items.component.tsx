'use client'

import useAdminItems from 'app/[locale]/admin/items/_components/admin-items.hook'
import ItemForm from 'app/[locale]/admin/items/_components/item-form/item-form.component'
import Button from 'app/_common/components/button/button.component'
import Spinner from 'app/_common/components/spinner/spinner.component'
import PaginationArray from 'app/_common/components/pagination/pagination-array/pagination-array.component'
import {FC} from 'react'
import Dropdown from 'app/_common/components/dropdown/dropdown.component'
import Input from 'app/_common/components/input/input.component'
import {useState} from 'react'
import {useRef} from 'react'
import {ChangeEvent} from 'react'
import Pagination from 'app/_common/components/pagination/pagination/pagination.component'
import ItemPreview from 'app/[locale]/admin/items/_components/item-preview/item-preview.component'

const AdminItems: FC = () => {
    const state = useAdminItems()
    const {items, user} = state

    return (
        <div className={'admin-items admin'}>
            {items && items.length > 0 && user?.isAdmin ? (
                <Content {...state}/>
            ) : (
                <Spinner className={'admin__spinner'}/>
            )}
        </div>
    )
}

export default AdminItems

const Content = (props: ReturnType<typeof useAdminItems>) => {
    const {pagesNumber, setCurrentPage, currentPage, onAddItem, transl} = props

    return (
        <div className={'admin-items-content admin container'}>
            <Table {...props}/>
            <Pagination
                className={'admin__pagination'}
                pagesNumber={pagesNumber}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            <Button className={'admin__button'} onClick={onAddItem}>
                {transl.create}
            </Button>
            {/*<FormMessage error={itemError}/>*/}
        </div>
    )
}

const Table = (props: ReturnType<typeof useAdminItems>) => {
    const {pageItems, onUpdate, onDelete, transl} = props

    return (
        <div className={'admin-items-table table'}>
            <div className={'table__col table__name'}>
                {transl.name}
            </div>
            <div className={'table__col table__category'}>
                {transl.category}
            </div>
            <div className={'table__col table__img'}>
                {transl.image}
            </div>
            <div className={'table__col table__actions'}>
                {transl.actions}
            </div>
            {pageItems.map(({item, itemIndex}) => (
                <ItemPreview
                    item={item}
                    itemIndex={itemIndex}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    key={item._id}
                />
            ))}
        </div>
    )
}

// const arr = []
// for (let i = 0; i < 1000; i++) {
//     arr.push(i.toString())
// }
//
// const [values, setValues] = useState(() => {
//     const initVaues: Record<string, string> = {}
//     for (let i = 0; i < 1000; i++) {
//         initVaues[i] = ''
//     }
//     return initVaues
// })
//
// const valuesRef = useRef(values)
//
// const onChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const {value, name} = event.target
//     valuesRef.current[name] = value
//     setValues({...valuesRef.current})
// }