export default function handler(req, res) {
    const articles = [{ title: 'Product A', desc: "Ein wunderbares Produkt für einen wunderbaren Tag", price: "3.0" }]
    res.status(200).json(articles)
}