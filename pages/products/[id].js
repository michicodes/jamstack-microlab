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
    const paths = []
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({params}) {
    try {
        const productData = await getProductData(params.id)
        console.log('products.getStaticProps','static generation',params);

        return {
            props: {
                productData
            }
        }
    } catch (e) {
        console.log('products.getStaticProps','dynamic generation',params);

        return {
            props: {
                productData: {
                    id: params.id,
                    contentHtml: `This page was generated at ${(new Date()).toISOString()}`,
                    title: 'Dynamic page',
                    date: new Date(),
                }
            }
        }
    }
}