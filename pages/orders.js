import OrderPreview from "@components/OrderPreview";
import {getData} from "./api/orders";
import auth0 from "../lib/auth0";
import Content from "@components/Content";

function Orders({ data, user }){

    const orderItems = data.map((order, i) => <OrderPreview key={i} id={order.id} date={order.date} articles={order.articles}/>)

    return (
        <>
            <Content>
                <h1>Orders</h1>
                <h3>Your latest Orders {user.name}</h3>
                <div>{orderItems}</div>
            </Content>
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    const session = await auth0.getSession(req, res)

    if (!session || !session.user) {
        return {
            redirect: {
                destination: '/api/login',
                permanent: false,
            }
        }
    }

    const data = await getData()

    return { props: { data, user: session.user } }
}

export default Orders