import Item from "./Item"
import { useAuth } from "../context/GlobalState"
import "./OrderItem.css"
export default function OrderItem({data,id}){
    const {orderValue} = useAuth();
    const orderInfo = orderValue[id];
    const subtotal = orderValue[id].reduce((total,item)=>{
        const product = data.find(p=>p.id === item.id);
        if(product){
            return total + (product.price * item.quantity);
        }
        return total;
    },0)
    return(
        <div className="order-item-body">
            <div className="order-text">
                <h1 className="order-id">Order id : {id + 1}</h1>
                <h2 className="sub">Subtotal : {subtotal.toFixed(2)} $</h2>
            </div>
            <div className="order-items">
                {
                    data.map((e,index)=>{
                        return <Item data={e} key={index} id={index} info={orderInfo}/>
                    })
                }
            </div>
        </div>
    )
}