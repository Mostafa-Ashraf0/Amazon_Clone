import { useLocation } from "react-router-dom";
import "./ProductPage.css"
import { useAuth } from "../context/GlobalState";
import toast, { Toaster } from 'react-hot-toast';
export default function ProductPage(){
    const location = useLocation();
    const { product } = location.state || {}; 
    const notify = () => toast('Product added to cart');
    const {fetchedProducts, dispatch, basket ,value} = useAuth();
        const handleClick = (index)=>{
            const product = fetchedProducts[index];
            const newBasket = [...basket.filter(item=>item.id !== product.id), product]
            dispatch({type:"Set_To_Basket",basket:newBasket})
            localStorage.setItem("basket", JSON.stringify(newBasket));
            notify();
            if (!value.find(item => item.id === product.id)) {
            const newValue = [...value.filter(item=>item.id !==index+1), {id:index+1,quantity:1}]
            dispatch({type:"Set_Selected_Value", value:newValue})
            localStorage.setItem("value", JSON.stringify(newValue));
            }
        }
    if (!product) { 
        return <p>No product found</p>;
    }

    const handleChange = (id,e)=>{
        const newValue = [...value.filter(item=>item.id !==id), {id:id,quantity:e.target.value}]
        dispatch({type:"Set_Selected_Value", value:newValue})
        localStorage.setItem("value", JSON.stringify(newValue));
    }

    return (
        <div className="product-page">
            <Toaster position="top-center" reverseOrder={false} />
            <img src={product.image} alt={product.title} />
            <div className="text">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <span className="rate">{product.rating.rate}/5 
                    <span className="count">({product.rating.count})</span>
                </span>
                <hr />
                <h3>Price: {product.price}$</h3>
            </div>
            <div className="details">
                <h3>{product.price}$</h3>
                <p>FREE delivery Tomorrow, 12 August. </p>
                <h3 style={{color:"green"}}>In Stock</h3>
                <select name="quantity" id="quantity" 
                onChange={(event)=>handleChange(product.id,event)}>
                    <option value="">Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button className="add-to-cart" onClick={()=>handleClick(product.id-1)}>Add to cart</button>
                <div className="del">
                    <p>Sold by : Amazon</p>
                    <p>Ships from : Amazon</p>
                </div>
            </div>
        </div>
    );
}