import OrderPreview from "@components/OrderPreview";
import {getOrderData} from "./api/orders";
import auth0 from "../lib/auth0";
import Content from "@components/Content";

function Orders({ data, user }){

    const orderItems = data[0].orders.map((order, i) => <OrderPreview key={i} id={order.orderId} date={order.date} orders={order.products}/>)

    return (
        <>
            <Content>
                <h1 className="text-3xl font-semibold">Orders</h1>
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

    //no mapping between order db and user db
    const data = await getOrderData("61bb34cba7c565e2341bd42a")

    const orders = data.map(order => {
        order._id = order._id.toString()
        return order
    })

    return { props:
        {
            data: orders,
            user: session.user
        }
    }
}

export default Orders