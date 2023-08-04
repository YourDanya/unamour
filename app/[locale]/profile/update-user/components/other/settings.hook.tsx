import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import useModal from 'app/_common/hooks/helpers/modal/modal.hook'
import updateUserSettingsContent from 'app/[locale]/profile/update-user/components/other/settings.content'

const useUpdateUserSettings = () => {
    const [transl] = useLocale(updateUserSettingsContent)
    const [modalState, showModal, hideModal] = useModal({updatePass: false, deleteUser: false, updateEmail: false})

    return {transl, modalState, showModal, hideModal}
}

export default useUpdateUserSettings