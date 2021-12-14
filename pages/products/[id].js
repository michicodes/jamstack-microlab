import Head from "next/head";

import {getAllProductIds, getProductData} from "lib/products";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Content from "@components/Content";

export default function Product({productData}) {
    return (
        <>
            <Head><title>{productData.title}</title></Head>
            <Header />
            <Content>
                <h2>{productData.title}</h2>
                <div dangerouslySetInnerHTML={{__html: productData.contentHtml}}/>
            </Content>
            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllProductIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const productData = await getProductData(params.id)
    return {
        props: {
            productData
        }
    }
}