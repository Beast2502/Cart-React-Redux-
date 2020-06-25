import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import './App.css';
import {CLEARCART,GET_TOTAL,TOGGLE_AMOUNT} from './Action';
import CartItems from './CardItems';
const Cart_Container =({cart=[],total,dispatch})=> {

        
        console.log(cart)
        
        React.useEffect(()=>{
            dispatch({type:GET_TOTAL})
        })
        
        if(cart.length ===0){
            return(
                <h4>Empty Cart</h4>
            )
        }
        else{
            const data = cart.map(item=>{
                return (
                    <>
                   
                    {/* <Card className="Card">
                    <CardTitle className="CardTitle">{item.tittle}</CardTitle>
                        <CardBody>
                            <CardSubtitle>${item.price}</CardSubtitle>
                        </CardBody>
                        <Button>REMOVE</Button>
                    </Card> */}
                    <CartItems key={item.id} {...item}/>
                   
                    </>
                
                )
                })
        
                return (
                    <div>
                        <h2>CART</h2>
                        <h3>Total := {total}</h3>
                        {data}
                        <Button onClick={()=> dispatch({type: CLEARCART})}>Clear List</Button>
                        
                    </div>
                );
            }
        
        
        

        }
       

const mapStateToProps=(store)=>{
    
    const {cart,total}= store;
    console.log("CaRT",cart)
    return {cart,total}    
}
export default connect(mapStateToProps)(Cart_Container);