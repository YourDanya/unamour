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
        <div className={'admin-items'}>
            {items.length > 0 && user?.isAdmin ? (
                <AdminContent {...state}/>
            ) : (
                <Spinner className={'admin-items__spinner'}/>
            )}
        </div>
    )
}

export default AdminItems

const AdminContent = (props: ReturnType<typeof useAdminItems>) => {

    const {pageItems, onUpdate, onDelete, pagesNumber, setCurrentPage, currentPage, onAddItem, transl} = props

    return (
        <div className={'admin-items-list admin container'}>
            <div className={'admin__items'}>
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