import React from "react";
import ClientService from "../../../components/client-service/client-service.component";

interface compositionAndCareProps {

}

const CompositionAndCare: React.FC<compositionAndCareProps> = () => {
    return (
        <>
            <ClientService/>
            <div className={'composition-and-care'}>
                composition-and-care
            </div>
        </>
    )
}

export default CompositionAndCare