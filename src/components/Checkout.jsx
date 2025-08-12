import "./Checkout.css"
import { useAuth } from "../context/GlobalState";
import toast, {Toaster}from "react-hot-toast";
export default function Checkout(){
    const notify = ()=> toast("order placed")
    const {basket , dispatch, orders ,value,orderValue} = useAuth();
    const handleCheckout = ()=>{
        dispatch({type:"Add_To_Orders",orders:[...orders, [...basket]]});
        localStorage.setItem("orders",JSON.stringify([...orders, [...basket]]))
        dispatch({type:"Set_To_Basket",basket:[]});
        localStorage.removeItem("basket");
        dispatch({type:"Set_Selected_Value_Orders",orderValue:[...orderValue, [...value]]});
        localStorage.setItem("orderValue",JSON.stringify([...orderValue, [...value]]))
        dispatch({type:"Set_Selected_Value",value:[]});
        localStorage.removeItem("value")
        notify();
    }
    const subtotal = value.reduce((total,item)=>{
        const product = basket.find(p=>p.id === item.id);
        if(product){
            return total + (product.price * item.quantity);
        }
        return total;
    },0)
    return(
        <div className="checkout">
            <Toaster position="top-center" reverseOrder={false} />
            <h3>Subtotal ({basket.length} items): {subtotal.toFixed(2)} $</h3>
            <button type="button" onClick={handleCheckout}>Procceed to Checkout</button>
        </div>
    )
}