import React, { Component } from 'react';
import {connect} from 'react-redux'
class Navbar extends Component {
    
    render() {
       
        return (
            <>
            <div>
                <h1>NAVBAR</h1><br/>
                Amount= {this.props.amount}
                <hr/>
            </div>
            
            </>
        );
    }
}

//map the store to the props of this component
const mapStateToProps = (store)=>{
   
   return  {amount: store.amount,name:store.name}

}

export default connect(mapStateToProps) (Navbar);