import {useLocale} from 'hooks/other/other.hooks'
import updateUserOtherContent from 'components/update-user/other/other.content'
import {useModal} from 'hooks/component/component.hooks'

const useUpdateUserOther = () => {
    const [transl] = useLocale(updateUserOtherContent)
    const [modalState, showModal, hideModal] = useModal({updatePass: false, deleteUser: false})

    return {transl, modalState, showModal, hideModal}
}

export default useUpdateUserOther