export type HamburgerProps = {
    hamburger: boolean,
    showModal: (param: 'hamburger') => void,
    hideModal: () => void
}