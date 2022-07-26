import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

 const useNav = () => {
    const initialModalState = {hamburger: false, search: false, shopping: false, sign: false, modal: false}

    const [active, setActive] = useState(initialModalState)

    const hideModal = () => {
        setActive(initialModalState)
    }

    const toggleModal = (event: React.MouseEvent<HTMLElement>) => {
        const param = event.currentTarget.id
        setActive(prevState => ({
                ...prevState,
                modal: !prevState.modal,
                [param]: !prevState[param as keyof typeof active]
            })
        )
    }

    const hideTopNav = (param: keyof typeof active) => {
        setActive(prevState => ({
                ...prevState,
                [param]: false
            })
        )
    }

    const showTopNav = (event: React.MouseEvent<HTMLElement>) => {
        const param = event.currentTarget.id
        setActive(prevState => ({
                ...prevState,
                [param]: !prevState[param as keyof typeof active]
            })
        )
    }

    const router= useRouter()

    const [home, setHome] = useState(false)

    const handleRouteChange = () => {
        console.log('route change')
        if(router.pathname==='/'){
            if (!home) {
                setHome(true)
            }
        }
        else {
            if(home){
                setHome(false)
            }
        }
        hideModal()
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
        }
    }, [])

    useEffect(() => {
        if(router.pathname==='/'){
            if (!home) {
                setHome(true)
            }
        }
        else {
            if(home){
                setHome(false)
            }
        }
    }, [router.pathname])

    return {
        initialModalState, active, setActive, hideModal, toggleModal, hideTopNav, showTopNav, home, setHome
    }
}

export default useNav