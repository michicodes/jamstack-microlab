import OrderPreview from "@components/OrderPreview";
import {getData} from "../api/orders";

function Orders({ data }){

    const orderItems = data.map(order => <OrderPreview id={order.id} date={order.date} articles={order.articles}/>)

    return (
        <>
            <h1>Orders</h1>
            <h3>Your latest Orders</h3>
            <div>{orderItems}</div>
        </>
    )
}

export async function getServerSideProps() {
    const data = await getData()

    return { props: { data } }
}

export default Orders