import "./Cart.css"
import { useAuth } from "../context/GlobalState";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
export default function Cart(){
    const {basket, user} = useAuth();
    
    return(
        <div className="main">
            <div className="left">
                <img src="/src/assets/images/checkoutAd.jpg" alt="checkoutAd" className="ad"/>
                <h4>Hello, {user}</h4>
                <h2>This is your shopping cart</h2>
                <hr />
                <div className="items">
                    {
                        basket.map((e,index)=>{
                            return <CartItem data = {e} key={index}/>
                        })
                    }
                </div>
            </div>
            <div className="right">
                    <Checkout/>
            </div>
        </div>
    )
}