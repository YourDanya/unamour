import '/components/shop-items/shop-items.styles.sass'
import '/components/items-collection/items-collection.styles.sass'
import '/components/shop-item/shop-item.styles.sass'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
