import "./Product.css"
import { useAuth } from "../context/GlobalState";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
export default function Product(){
    const notify = () => toast('Product added to cart');
    const {fetchedProducts, dispatch, basket,value} = useAuth();
    console.log(fetchedProducts)
    const handleClick = (index)=>{
        const product = fetchedProducts[index];
        const newBasket = [...basket.filter(item=>item.id !== product.id), product]
        dispatch({type:"Set_To_Basket",basket:newBasket})
        localStorage.setItem("basket", JSON.stringify(newBasket));
        notify();
        const newValue = [...value.filter(item=>item.id !==index+1), {id:index+1,quantity:1}]
        dispatch({type:"Set_Selected_Value", value:newValue})
        localStorage.setItem("value", JSON.stringify(newValue));
    }

    return(
        <div className="products">
            {
                fetchedProducts.map((e,index)=>{
                    return(
                    <div className="product" key={e.id}>
                        <Toaster position="top-center" reverseOrder={false} />
                        <div className="text">
                            <Link to={`/product/${e.id}`} state={{product:e}}>
                            <h2>{e.title}</h2>
                            </Link>
                            <p>{e.description}</p>
                            <span>{e.price}<span className="inner">$</span></span>
                            <span className="rate">{e.rating.rate}/5 
                                <span className="count">({e.rating.count})</span>
                            </span>
                        </div>
                        <Link to={`/product/${e.id}`} state={{product:e}}>
                        <img src={e.image} alt="product" />
                        </Link>
                        <div className="bottom">
                            <p className="free">Free delivery by tomorrow</p>
                            <button className="product-btn" onClick={()=>handleClick(index)}>Add to cart</button>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}