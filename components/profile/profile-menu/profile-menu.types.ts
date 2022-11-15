import {User} from 'redux/user/user.types'

export type ProfileMenuProps = {
    className?: string,
    menu: string[],
    translMenu: string[],
    user: User | null
}