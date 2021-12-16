import nextConnect from "next-connect";
import middleware, {client, getDb} from "../../lib/db";
import {ObjectId} from "mongodb";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const orders = await getOrderData(req.query.id);
    res.status(200).json(orders)
})

export async function getOrderData(id) {
    await client.connect()
    const db = client.db('MCT')
    return await db.collection('Users').find({ _id: ObjectId(id) }).toArray()
}

export default handler;