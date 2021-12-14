
export default function OrderPreview({ id, date, articles }){

    const articleItems = articles.map(article => <li>{article}</li>)

    return (
        <>
            <h4>Ordernumber: {id}</h4>
            <p>{date}</p>
            <ul>{articleItems}</ul>
            <hr/>
        </>
    )
}