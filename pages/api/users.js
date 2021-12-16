import nextConnect from 'next-connect';
import { ObjectId } from 'mongodb';
import middleware from '../../lib/db';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection('Users').find({ _id: ObjectId(req.query.id) }).toArray()
    res.json(doc);
})

export default handler;