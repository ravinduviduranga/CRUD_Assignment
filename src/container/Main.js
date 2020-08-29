import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sendProductDetails } from '../redux-store/actions/actions';
import ProductCollection from '../components/productForm';
import {SEND_DETAILS} from '../redux-store/action-types/types';


const mapStateToProps = state =>{
    return {
        ...state
    };       
};

const mapDispatchToProps = dispatch =>{
    return{
        storeDetails: (productId,productName,productDescription,productQuantity) => {
            dispatch(sendProductDetails({productId,productName,productDescription,productQuantity}))
        },
    }
};
class Main extends Component{

    state= {
        productId: null,
        productName: null,
        productDescription: null,
        productQuantity:null
    };
    render(){
        return(
            <div className="App">
                <ProductCollection
                {...this.state}
                {...this.props}
                handleProductId={(e)=>this.setState({productId: e.target.value})}
                handleProductName={(e)=>this.setState({productName: e.target.value})}
                handleProductDescription={(e)=>this.setState({productDescription: e.target.value})}
                handleProductQuantity={(e)=>this.setState({productQuantity: e.target.value})}
                />
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)