import { useAuth } from "../context/GlobalState"
import OrderItem from "./OrderItem";
import "./Orders.css"
export default function Orders(){
    const {orders} = useAuth();

    if (orders.length === 0) {
        return <p>No ordres yet</p>;
    }
    return(
        <div className="orders-body">
            <h1>Orders History</h1>
            <div className="orders">
                {
                    orders.map((e,index)=>{
                        return <OrderItem data = {e} key={index} id={index}/>
                    })
                }
            </div>
        </div>
    )
}