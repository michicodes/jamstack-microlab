import Head from 'next/head'
import Link from 'next/link'


import Footer from '@components/Footer'
import Content from '@components/Content'


import FeedbackForm from '@components/FeedbackForm'

export default function Home() {
    return (
        <div className="mx-auto flex justify-center items-center h-screen">
            <Head>
                <title>senacor.shop</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="Senacor Shop" />
                <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>

            <main>
                <FeedbackForm/>
            </main>
            <Footer/>
        </div>
    )
}
