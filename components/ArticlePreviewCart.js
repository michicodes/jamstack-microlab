export default function ArticlePreviewCart({ title, desc, price }){
    return (
        <>
            <h4>{title}</h4>
            <p>{desc}</p>
            <p>Preis: <b>{price}€</b></p>
            <span style={{ color: "red", textDecoration: "underline" }}>Remove</span>
            <hr/>
        </>
    )
}