import React, {ReactNode} from "react"
import Link from "next/link"
import {useRouter} from "next/router"

type clientServiceProps = {}

const urls = [
    {name: 'УХОД ЗА ОДЕЖДОЙ', url: 'clothing-care', className: 'service__link--first'},
    {name: 'ОПЛАТА И ДОСТАВКА', url: 'delivery'},
    {name: 'ОТСЛЕЖИВАНИЕ ЗАКАЗА', url: 'order-tracking'},
    {name: 'ВОЗВРАТ ТОВАРА', url: 'return'},
    {name: 'КАК ОФОРМИТЬ ЗАКАЗ', url: 'ordering'},
    {name: 'ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ', url: 'policy'},
    {name: 'ПУБЛИЧНАЯ ОФЕРТА', url: 'privacy'},
    {name: 'ГАРАНТИЙНЫЙ СРОК', url: 'warranty-period'},
]

const ClientService: React.FC<clientServiceProps> = ({children}) => {

    const router = useRouter()

    return (
        <div className={'service'}>
            <div className="service__links">
                {urls.map(({name, url, className}) =>
                    <Link href={`/client-service/${url}`} key={name}>
                        <a className={`service__link ${url === router.pathname ? 'service__link--active' : ''} ${className ?? ''}`}>
                            {name}
                        </a>
                    </Link>
                )}
            </div>
            <div className="service__page">
                {children}
            </div>
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