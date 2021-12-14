import Link from 'next/link'

import { getSortedProductsData } from 'lib/products'
import Content from "@components/Content";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export async function getStaticProps() {
    const allProductsData = getSortedProductsData()
    return {
        props: {
            allProductsData
        }
    }
}

export default function Shop({ allProductsData }) {
    return (
        <>
            <Head><title>Products</title></Head>
            <Header />
            <Content>
                <div>
                    <h2>Products</h2>
                    <ul>
                        {allProductsData.map(({ id, title }) => (
                            <li key={id}>
                                <Link href={`/products/${id}`}><a>{title}</a></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Content>
            <Footer />
        </>
    );
}