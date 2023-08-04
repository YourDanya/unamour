import {User} from 'app/_common/store/user/user.types'

export type MenuProps = {
    className?: string,
    menu: string[],
    translMenu: string[],
    user: User | null | undefined
}