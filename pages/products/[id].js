import {getAllProductIds, getProductData} from "lib/products";

export default function Product({ productData }) {
    return <div>{ productData.id} <br /> {productData.title} <br/> {productData.date}<br/>
        <div dangerouslySetInnerHTML={{ __html: productData.contentHtml }} />
    </div>
}

export async function getStaticPaths() {
    const paths = getAllProductIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const productData = await getProductData(params.id)
    return {
        props: {
            productData
        }
    }
}