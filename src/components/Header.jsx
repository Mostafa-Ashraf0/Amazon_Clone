import './Header.css';
import {useAuth} from "../context/GlobalState"
import { Link } from "react-router-dom";
import logo from '../assets/images/Amazon_logo_white.png';
export default function Header() {
    const {basket} = useAuth();
    const userName = localStorage.getItem("user");
    const handleAuth = ()=>{
        if(userName){
            localStorage.removeItem("user");
            localStorage.removeItem("password");
        }
    }
    return (
        <>
            <header>
                <Link to="/">
                    <div className="img hover-box">
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                <div className="location hover-box">
                    <span className= "deliver-to">Deliver to</span>
                    <span className = "country"><i class="fa-solid fa-location-dot"></i>Egypt</span>
                </div>
                <div className="search">
                    <input type="input" placeholder='Search Amazon.eg'/>
                    <div className="icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="right">
                    <div className="language hover-box">
                        <img src="https://www.countryflags.com/wp-content/uploads/egypt-flag-png-xl.png" 
                        alt="" />
                        <span>EN</span>
                    </div>
                <Link to="/login">
                    <div className="account hover-box" onClick={handleAuth}>
                        <span className='hello'>Hello, {userName!==null?userName:"Guest"}</span>
                        <span className='A-L'>{userName?"Sign Out":"Sign In"}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="orders hover-box">
                        <span className='orders-box'>Orders</span>
                    </div>
                </Link>
                <Link to="/cart">
                    <div className="cart hover-box">
                        <div className="cart-icon">
                            <span>{basket?basket.length:0}</span>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                        <span>Cart</span>
                    </div>
                </Link>
                </div>
            </header>
        </>
    )
}