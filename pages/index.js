import Head from 'next/head'
import Link from 'next/link'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Content from '@components/Content'

export default function Home() {
    return (<>
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Content>
                <main>
                    <Header title="Welcome to my app!"/>
                    <p className="description">
                        Get started by editing <code>pages/index.js</code>
                    </p>
                    <ul>
                        <li><Link href="/products"><a>Products</a></Link></li>
                    </ul>
                </main>
            </Content>
            <Footer/>
        </>
    )
}
