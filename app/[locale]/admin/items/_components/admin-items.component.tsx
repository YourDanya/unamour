'use client'

import useAdminItems from 'app/[locale]/admin/items/_components/admin-items.hook'
import Button from 'app/_common/components/button/button.component'
import Spinner from 'app/_common/components/spinner/spinner.component'
import {FC} from 'react'
import ItemPreview from 'app/[locale]/admin/items/_components/item-preview/item-preview.component'
import Pagination from 'app/_common/components/pagination/pagination.component'
import ItemForm from 'app/[locale]/admin/items/_components/item-form/item-form.component'
import Modal from 'app/_common/components/modal/modal.component'
import ModalContent from 'app/_common/components/modal-content/modal-content.component'
const AdminItems: FC = () => {
    const state = useAdminItems()
    const {items, user} = state

    return (
        <div className={'admin-items admin'}>
            {items.length > 0 && user?.isAdmin ? (
                <Content {...state}/>
            ) : (
                <Spinner className={'admin__spinner'}/>
            )}
        </div>
    )
}

export default AdminItems

const Content = (props: ReturnType<typeof useAdminItems>) => {
    const {formValue, setFormValue, onBack, onCreate} = props

    return (
        <div className={'admin-items-content admin container'}>
            {formValue ? (
                <ItemForm
                    formValue={formValue}
                    setFormValue={setFormValue}
                    onBack={onBack}
                    onCreate={onCreate}
                />
            ) : (
                <Main {...props}/>
            )}
        </div>
    )
}
const Main = (props: ReturnType<typeof useAdminItems>) => {
    const {pagesNumber, onCurrentPage, currentPage, onAddItem, transl, modalActive, onHideModal} = props

    return (
        <div className={'admin-items-main admin'}>
            <Table {...props}/>
            <Pagination
                className={'admin__pagination'}
                pagesNumber={pagesNumber}
                onCurrentPage={onCurrentPage}
                currentPage={currentPage}
            />
            <div className={'admin__button-wrapper'}>
                <Button className={'admin__button'} onClick={onAddItem}>
                    {transl.create}
                </Button>
            </div>
            <Modal active={modalActive} hideModal={onHideModal}/>
            <AdminModalContent {...props}/>
            {/*<FormMessage error={itemError}/>*/}
        </div>
    )
}

const AdminModalContent = (props: ReturnType<typeof useAdminItems>) => {
    const {modalActive, onHideModal, transl, onYes, onNo} = props

    return (
        <ModalContent
            active={modalActive}
            hideModal={onHideModal}
            className={'admin-items-modal modal'}
        >
            <div className={'modal__title'}>
                {transl.sureDeleteItem}
            </div>
            <Button onClick={onYes} className={'modal__button'}>
                {transl.yes}
            </Button>
            <Button onClick={onNo} className={'modal__button'}>
                {transl.no}
            </Button>
        </ModalContent>
    )
}

const Table = (props: ReturnType<typeof useAdminItems>) => {
    const {pageItems, onUpdate, onDelete, transl, itemsStyles, tableStyles} = props

    console.log('pageItems', pageItems)

    return (
        <div className={'admin-items-table table'} style={tableStyles}>
            <div className={'table__col table__number'}>
                №
            </div>
            <div className={'table__col table__name'}>
                {transl.name}
            </div>
            <div className={'table__col table__category'}>
                {transl.category}
            </div>
            <div className={'table__col table__image'}>
                {transl.image}
            </div>
            <div className={'table__col table__actions'}>
                {transl.actions}
            </div>
            {pageItems.map(({item, itemIndex}, index) => (
                <ItemPreview
                    style={itemsStyles[index]}
                    item={item}
                    itemIndex={itemIndex}
                    pageIndex={index}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                    key={item._id}
                />
            ))}
        </div>
    )
}
