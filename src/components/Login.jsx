import { Link } from "react-router-dom";
import "./Login.css"
import { Signin } from "../features/signin";
import { useRef } from "react";
import { useAuth } from "../context/GlobalState";
export default function Login(){
    const {dispatch} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignin = async(e)=>{
        e.preventDefault();
        const userData = {
        email: emailRef.current.value,
        password: passwordRef.current.value
    }   
        try{
            const loggedUser = await Signin(userData.email, userData.password);
            if(loggedUser){
                dispatch("Set_User",loggedUser.email);
                localStorage.setItem("logged",true);
                localStorage.setItem("user",loggedUser.email)
            }
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="login">
            <Link to="/">
                <img className="logo" src="/src/assets/images/Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login-form">
                <h1>Sign in</h1>
                <form onSubmit={handleSignin}>
                    <h5>Email</h5>
                    <input type="text" ref={emailRef} required/>
                    <h5>Password</h5>
                    <input type="password" ref={passwordRef} required/>
                        <button type="submit" className="login-btn">sign in</button>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button type="button" className="signup-btn" >create an account</button>
                </form>
            </div>
        </div>
    )
}