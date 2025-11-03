import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signin = async(email,password)=>{
    try {
        const userCredential = await signInWithEmailAndPassword(auth,email, password);
        const user = userCredential.user;
        return user;
    } catch (err){
        console.log(err);
    }
}

export {Signin}