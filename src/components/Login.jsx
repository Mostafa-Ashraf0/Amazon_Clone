import { Link } from "react-router-dom";
import "./Login.css"
import { useAuth } from "../context/GlobalState";
export default function Login(){
    const {dispatch, user , password} = useAuth();

    //dispatch Methods
    const setUser = (e)=>{
        dispatch({type:"Set_User", user:e.target.value})
    }
    const setPassword = (e)=>{
        dispatch({type:"Set_Password", password:e.target.value})
    }

    //set data in localStorage
    const setLocalStorage = ()=>{
        localStorage.setItem("user",user);
        localStorage.setItem("password",password)
    }
    
    return(
        <div className="login">
            <Link to="/">
                <img className="logo" src="/src/assets/images/Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login-form">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={user} onChange={setUser} required/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={setPassword} required/>
                    <Link to={user && password?"/":"/login"}>
                        <button type="button" className="login-btn" onClick={setLocalStorage}>sign in</button>
                    </Link>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button type="button" className="signup-btn" >create an account</button>
                </form>
            </div>
        </div>
    )
}