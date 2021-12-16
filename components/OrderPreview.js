
export default function OrderPreview({ id, date, orders }){

    const articleItems = orders.map((article,i) => <li key={i}>{article.productName}, {article.poductPrice} €</li>)

    return (
        <div className="border p-4 my-2">
            <h4>Ordernumber: {id}</h4>
            <p>{date}</p>
            <ul>{articleItems}</ul>
        </div>
    )
}