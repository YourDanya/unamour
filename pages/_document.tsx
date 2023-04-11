import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {

    return (
        <Html>
            <Head>
                <title>UNAMOUR</title>
                <meta name="description" content={'Магазин UNAMOUR'}/>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
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