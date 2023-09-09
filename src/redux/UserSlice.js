import {toast} from "react-hot-toast"
let time=900
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    orders:[],
    total: 0,
    subtotal:0
}
export const userSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            let existing = state.cart.find((item) => item._id === action.payload._id)
            if (existing) {
                existing.qty += 1
                state.subtotal=existing.price*existing.qty
                toast.success(`Another ${existing.name} added to cart`,{
                    duration:time
                })
                localStorage.setItem("cart",JSON.stringify([...state.cart,existing]))

            } else {
                state.cart.push({ ...action.payload, qty: 1 })
                toast.success(`${action.payload.name} added to cart`,{
                    duration:time
                })
                localStorage.setItem("cart",JSON.stringify([...state.cart,action.payload]))


                state.subtotal =action.payload.price*action.payload.qty
            }
        },
        remove: (state, action) => {
            state.cart = state.cart.filter(x => x._id !== action.payload._id)
            toast.success(`${action.payload.name} removed from cart`,{
                duration:time
            })
        },
        incqty: (state, action) => {
            let exis = state.cart.find((item) => item._id === action.payload._id)
            if (exis) {
                exis.qty += 1
                state.subtotal +=exis.price*exis.qty
                localStorage.setItem("cart",JSON.stringify([...state.cart,exis]))

            }
        },
        decqty: (state, action) => {
            let exis = state.cart.find((item) => item._id == action.payload._id)
            if (exis) {
                if (exis.qty > 1) {
                    exis.qty -= 1
                    state.subtotal +=exis.price*exis.qty
                localStorage.setItem("cart",JSON.stringify([...state.cart,exis]))

                }
            }
        },
        carttotal: (state) => {
            let total = 0
            state.cart.forEach((i) => {
                total += i.qty * i.price
            })
            state.total = total

        },
        orderadd:(state,action)=>{
            state.orders.push({...state.cart})
            console.log(state.orders)
        }

    }
})
export const { add, remove, decqty, incqty, carttotal,orderadd } = userSlice.actions
export default userSlice.reducer