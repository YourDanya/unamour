import React, {ReactNode} from "react"
import useProfile from "./profile.hook"
import Button from "../common/button/button.component";

type profileProps = {}

const Profile: React.FC<profileProps> = (props) => {

    const {children} = props
    const {user, translation: {greeting, menu, signOut}} = useProfile()

    return user &&
        (<div className={'profile'}>
            <div className={'profile__top'}>
                <div className={'profile__sign-out'}>
                    <Button className={'profile__sign-out-btn'} onClick={() => {}}>
                        {signOut}
                    </Button>
                </div>
                <div className={'profile__name'}>
                    {greeting} {user.name}!
                </div>
                <ul className={'profile__menu'}>
                    {menu.map((item, index) => (
                        <div className={'profile__menu-link'} key={index}>
                            {item}
                        </div>
                    ))}
                </ul>
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