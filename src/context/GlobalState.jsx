import {createContext , useContext, useReducer , useEffect, useState} from "react";
import AppReducer from "./AppReducer";
import { initialState } from "./AppReducer";
const GlobalContext = createContext()

export default function GlobalProvider({children}){
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [fetched,setFetched] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(data=>setFetched(data))
    },[])
    return <GlobalContext.Provider 
        value={{basket:state.basket,
        orders:state.orders,
        user:state.user, 
        password:state.password, 
        dispatch:dispatch,
        fetchedProducts:fetched,
        value:state.value,
        orderValue:state.orderValue}}>{children}
        </GlobalContext.Provider>
}

export const useAuth = ()=>{
    return useContext(GlobalContext);
}