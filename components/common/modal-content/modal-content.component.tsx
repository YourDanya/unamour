import {FC} from 'react'
import {ModalContentProps} from 'components/common/modal-content/modal-content.types'
import useModalContent from 'components/common/modal-content/modal-content.hook'

const ModalContent: FC<ModalContentProps> = (props) => {
    const {children, className, hideModal, active} = props

    const {onHideModal} = useModalContent(hideModal)

    return (
        <div className={`modal-content ${active? 'modal-content--active' : ''} ${className?? ''}`}>
            <button className='close modal-content__close' onClick={onHideModal}/>
            {children}
        </div>
    )
}

export default ModalContent