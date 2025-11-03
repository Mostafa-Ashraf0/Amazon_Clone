import './Header.css';
import {useAuth} from "../context/GlobalState";
import { logout } from '../features/signout';
import { Link } from "react-router-dom";
import logo from '../assets/images/Amazon_logo_white.png';
import { useEffect, useState } from 'react';
export default function Header() {
    const {basket} = useAuth();
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(false);
    useEffect(()=>{
        const userName = localStorage.getItem("user");
        const loggedValue = localStorage.getItem("logged") === "true" //convert string value to bool;
        setUser(userName);
        setLogged(loggedValue);
    },[])
    const handleSignout = async()=>{
        try{
            await logout();
            localStorage.setItem("logged",false);
            localStorage.setItem("user","");
            setUser(null);
            setLogged(false);
        }catch(err){
            console.log(err);
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
                    <div className="account hover-box" onClick={handleSignout}>
                        <span className='hello'>Hello, {logged?user:"guest"}</span>
                        <span className='A-L'>{logged?"Sign Out":"Sign In"}</span>
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