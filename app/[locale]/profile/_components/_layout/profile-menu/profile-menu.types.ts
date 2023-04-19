import {User} from 'app/[locale]/_redux/user/user.types'

export type MenuProps = {
    className?: string,
    menu: string[],
    translMenu: string[],
    user: User | null
}