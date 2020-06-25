import {INCREASE,DECREASE,CLEARCART,REMOVE, GET_TOTAL} from './Action';

//reducer


const reducer=(state,action)=>{

    //clear Cart
    if(action.type === CLEARCART){
        return {...state,cart:[]}
    }
    
    //decrease
    if(action.type === DECREASE){
        let tempCart =[];
        if(action.payload.amount ===1){
            tempCart = state.cart.filte(cartItem => 
                cartItem.id !== action.payload.id)
        }
        else {
            tempCart = state.cart.map(cartItem =>{
                if(cartItem.id === action.payload.id){
                    cartItem={...cartItem,amount:cartItem.amount -1}
                }
                return cartItem
            })

        }
        return {...state,cart:tempCart}
    }
    
    
    //Increase
    if(action.type === INCREASE){
        let tempcart= state.cart.map((cartItem)=>{
            console.log("CartItem",cartItem)
            if(cartItem.id === action.payload.id){
                cartItem = {...cartItem,amount: cartItem.amount+1 }
            }
            return cartItem
        })
        return{...state,cart:tempcart}
    }
    
    //Remove
    if(action.type === REMOVE){
        console.log(action.payload.id)
        return{...state,cart:state.cart.filter((cartItem)=>
            cartItem.id !== action.payload.id

        )}
    }
    

    //get total 
    if(action.type === GET_TOTAL){
        let {total,amount}= state.cart.reduce((cartTotal,cartItem)=> {
            const {price,amount}= cartItem;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal
        },{
            total:0,
        amount:0})
        total = parseFloat(total.toFixed(2))
        return {...state,total,amount}
    }
    return state;

    // switch(action.type){
    //     case CLEARCART: return {...state,cart:[]}
    //     default: return state;
    // }

    
}
export default reducer;