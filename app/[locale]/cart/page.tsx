import dynamic from 'next/dynamic'
const Cart = dynamic(() => import('app/[locale]/cart/_components/cart.component'), {ssr: false})

const CartPage = () => {
    return (<Cart/>)
}

export default CartPage