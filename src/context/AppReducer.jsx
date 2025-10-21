const cartData = JSON.parse(localStorage.getItem("basket")) || [];
const ordersData = JSON.parse(localStorage.getItem("orders")) || [];
const storageValue = JSON.parse(localStorage.getItem("value")) || [];
const storageOrderValue = JSON.parse(localStorage.getItem("orderValue")) ||[];
export const initialState = {
    basket : cartData,
    user : null,
    orders: ordersData,
    value: storageValue,
    orderValue : storageOrderValue
}

export default function AppReducer(state = initialState, action){
    switch(action.type){
        case "Set_User":
            return{
                ...state,
                user : action.user
            };
        case "Set_Password":
            return{
                ...state,
                password : action.password
            };
        case "Set_To_Basket":
            return{
                ...state,
                basket : action.basket
            };
        case "Add_To_Orders":
            return{
                ...state,
                orders :action.orders
            }
        case "Set_Selected_Value":
            return{
                ...state,
                value : action.value
            }
        case "Set_Selected_Value_Orders":
            return{
                ...state,
                orderValue : action.orderValue
            }
        default:
            return state;
    }
}