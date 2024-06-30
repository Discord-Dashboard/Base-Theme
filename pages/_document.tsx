import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className="h-full">
            {/* @ts-ignore */}
            <Head />
            <body className="h-full">
            <Main />
            {/* @ts-ignore */}
            <NextScript />
            </body>
        </Html>
    )
}