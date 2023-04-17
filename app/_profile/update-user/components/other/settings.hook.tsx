import {useLocale} from 'hooks/other/other.hooks'
import updateUserSettingsContent from 'components/update-user/other/settings.content'
import {useModal} from 'hooks/component/component.hooks'

const useUpdateUserSettings = () => {
    const [transl] = useLocale(updateUserSettingsContent)
    const [modalState, showModal, hideModal] = useModal({updatePass: false, deleteUser: false, updateEmail: false})

    return {transl, modalState, showModal, hideModal}
}

export default useUpdateUserSettings