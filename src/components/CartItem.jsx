import "./CartItem.css"
import { useAuth } from "../context/GlobalState";
export default function CartItem({ data }) {
    const { basket, dispatch , value } = useAuth()
    const itemValue = value.find(v => v.id === data.id);
    const handleDelete = (id) => {
        const newBasket = basket.filter((ele) => {
            return ele.id !== id
        });
        dispatch({ type: "Set_To_Basket", basket: newBasket })
        localStorage.setItem("basket", JSON.stringify(newBasket));
    }


    const handleChange = (id,e)=>{
        const newValue = [...value.filter(item=>item.id !==id), {id:id,quantity:e.target.value}]
        dispatch({type:"Set_Selected_Value", value:newValue})
        localStorage.setItem("value", JSON.stringify(newValue));
    }
    return (
        <div className="item" key={data.id}>
            <img src={data.image} alt="product" />
            <div className="text">
                <h2>{data.title}</h2>
                <span className="price">{data.price * (itemValue ? itemValue.quantity : 1)}<span className="inner">$</span></span>
                <span className="rate">{data.rating.rate}/5</span>
                <button type="button" className="delete" onClick={() => handleDelete(data.id)}>
                    Remove from cart
                </button>
                <select name="quantity" id="quantity" 
                onChange={(event)=>handleChange(data.id,event)}>
                    <option value="">Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <h2>{itemValue?itemValue.quantity:1}</h2>
            </div>
        </div>
    )
}