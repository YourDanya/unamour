import React, {ReactNode, useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

interface clientServiceProps {

}

const urls = [
    {name: 'УХОД ЗА ОДЕЖДОЙ', url: 'clothing-care'}, // 1
    {name: 'ОПЛАТА И ДОСТАВКА', url: 'delivery'}, // 2
    {name: 'ОТСЛЕЖИВАНИЕ ЗАКАЗА', url: 'order-tracking'}, //
    {name: 'ВОЗВРАТ ТОВАРА', url: 'return'}, // 4
    {name: 'КАК ОФОРМИТЬ ЗАКАЗ', url: 'ordering'}, //
    {name: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ', url: 'policy'}, // 3
    {name: 'ПУБЛИЧНАЯ ОФЕРТА', url: 'privacy'}, //
    {name: 'ГАРАНТИЙНЫЙ СРОК', url: 'warranty-period'}, // 5
]

const ClientService: React.FC<clientServiceProps> = ({children}) => {

    useEffect(() => {

    }, [])

    const router = useRouter()

    useEffect(() => {
        console.log('mounted client service')
    }, [])

    const [counter, setCounter] = useState(0)

    return (
        <div className={'client-service'}>
            {
                urls.map(({name, url}) =>
                    <Link href={`/client-service/${url}`} key={name}>
                        <a className={`client-service__link ${url === router.pathname ? 'client-service__link--active' : ''}`}>
                            {name}
                        </a>
                    </Link>
                )
            }
            <div className="client-service--page">
                {
                    children
                }
            </div>
            <button onClick={() => setCounter(counter + 1)}>
                {counter}
            </button>
        </div>
    )
}

export const getClientServiceLayout = (page: ReactNode) => {
    return (
        <ClientService>
            {page}
        </ClientService>
    )
}

export default ClientService