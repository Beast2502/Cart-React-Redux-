import React, { Component } from 'react';
import {Card, CardBody,CardTitle,CardSubtitle,Button} from "reactstrap";
import {connect} from "react-redux";
import {INCREASE,DECREASE,REMOVE} from './Action';

class CardItems extends Component {
    render() {
        return(
            <div>
                <Card className="Card">
                    <CardTitle className="CardTitle">{this.props.tittle}</CardTitle>
                        <CardBody>
                            <CardSubtitle>${this.props.price}</CardSubtitle>
                            <CardSubtitle>{this.props.amount}</CardSubtitle>
                        </CardBody>
                        <Button onClick={()=> this.props.increase()}>INCREASE</Button>
                        <Button onClick={()=> this.props.decrease()}>DECREASE</Button>
                        <Button onClick={() => this.props.remove()}>REMOVE</Button>
                    </Card>
                
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    console.log(ownProps)
    const {id,amount} = ownProps
    return { 
        remove: () => dispatch({type:REMOVE ,payload:{id}}),
        increase: () => dispatch({type:INCREASE ,payload:{id}}),
        decrease: () => dispatch({type:DECREASE ,payload:{id,amount}})
}
}

export default connect(null,mapDispatchToProps)(CardItems) ;