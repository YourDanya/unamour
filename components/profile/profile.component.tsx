import React, {ReactNode} from "react"
import useProfile from "./profile.hook"
import Button from "../common/button/button.component"
import NavLink from "../common/nav-link/nav-link.component"

type profileProps = {}

const Profile: React.FC<profileProps> = (props) => {

    const {children} = props
    const {user, translation, content} = useProfile()

    return user &&
        (<div className={'profile'}>
            <div className={'profile__top'}>
                <div className={'profile__sign-out'}>
                    <Button className={'profile__sign-out-btn'} onClick={() => {}}>
                        {translation.signOut}
                    </Button>
                </div>
                <div className={'profile__name'}>
                    {translation.greeting} {user.name}!
                </div>
                <div className={'profile__menu'}>
                    {content.menu.map((item, index) => (
                        <NavLink
                            href={item}
                            key={index}
                            className={'profile__menu-link'}
                            activeClassName={'profile__menu-link--active'}
                        >
                            {translation.menu[index]}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className={'profile__page'}>
                {children}
            </div>
        </div>)

}

export const getProfileLayout = (page: ReactNode) => {
    return (
        <Profile>
            {page}
        </Profile>
    )
}

export default Profile