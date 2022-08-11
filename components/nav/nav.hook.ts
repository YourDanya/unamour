import useNavRoute from "./nav-route.hook"
import {useModal} from "../../hooks/component.hooks"

 const useNav = () => {

     const [modalState, showModal, hideModal] = useModal({hamburger: false, search: false, shopping: false, sign: false, modal: false})

    // const hideModal = () => {
    //     setActive(initialModalState)
    // }
    //

    // const toggleModal = (event: React.MouseEvent<HTMLElement>) => {
    //     const param = event.currentTarget.id
    //     setActive(prevState => ({
    //             ...prevState,
    //             modal: !prevState.modal,
    //             [param]: !prevState[param as keyof typeof active]
    //         })
    //     )
    // }
    //
    // const hideTopNav = (param: keyof typeof active) => {
    //     setActive(prevState => ({
    //             ...prevState,
    //             [param]: false
    //         })
    //     )
    // }
    //
    // const showTopNav = (event: React.MouseEvent<HTMLElement>) => {
    //     const param = event.currentTarget.id
    //     setActive(prevState => ({
    //             ...prevState,
    //             [param]: !prevState[param as keyof typeof active]
    //         })
    //     )
    // }

    const {home} = useNavRoute(hideModal)

    return {modalState, showModal, hideModal, home}
}

export default useNav