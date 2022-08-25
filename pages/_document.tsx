import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {

    return (
        <Html>
            <Head>
                <title>UNAMOUR</title>
                <meta name="description" content={'Магазин UNAMOUR'}/>
                <link
                    rel='preload'
                    href='/fonts/SeasonsRegular.ttf'
                    as='font'
                    type={'font/ttf'}
                    crossOrigin={'anonymous'}
                />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}