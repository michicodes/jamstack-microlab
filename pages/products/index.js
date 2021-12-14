import Link from 'next/link'

import { getSortedProductsData } from 'lib/products'

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
        <section>
            <h2>Products</h2>
            <ul>
                {allProductsData.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/products/${id}`}><a>{title}</a></Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}