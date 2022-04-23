import React from "react";
import ClientService from "../../../components/client-service/client-service.component";

interface paymentAndDeliveryProps {

}

const PaymentAndDelivery: React.FC<paymentAndDeliveryProps> = () => {
    return (
        <>
            <ClientService/>
            <div className={'payment-and-delivery'}>
                payment-and-delivery
            </div>
        </>
    )
}

export default PaymentAndDelivery