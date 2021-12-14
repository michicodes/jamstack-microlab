import ArticlePreviewCart from "@components/ArticlePreviewCart";
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Cart(){

    const { data, error } = useSWR('/api/articles', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    const articleItems = data.map(article => <ArticlePreviewCart title={article.title} desc={article.desc} price={article.price}/>)

    return (
        <>
            <h1>Checkout</h1>
            <h3>Artikel</h3>
            <div>{articleItems}</div>
        </>
    )
}

export default Cart