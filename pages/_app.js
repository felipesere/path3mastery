import '../styles/globals.css'
import Head from "next/head";
import Link from "next/link";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Path 2 Mastery</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/my-path">
                    <a>My Path</a>
                </Link>
            </nav>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
