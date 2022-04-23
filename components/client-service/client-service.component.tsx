import React, {useEffect} from "react";

interface clientServiceProps {

}

const ClientService: React.FC<clientServiceProps> = () => {

    useEffect(() => {
        console.log('mounted')
    }, [])

    return (
        <div className={'client-service'}>
            client service
        </div>
    )
}

export default ClientService