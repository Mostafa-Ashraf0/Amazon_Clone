import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const logout = async()=>{
    try {
        await signOut(auth);
        console.log("loggedOut");
    } catch (err){
        console.log(err);
    }
}

export {logout}