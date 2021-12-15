export default async function handler(req, res) {
    const data = await getData();
    res.status(200).json(orders)
}

export async function getData() {
    return [{ id: '123', date: "Tue Dec 14 2021", articles: ["Produkt A", "Produkt B"] }]
}