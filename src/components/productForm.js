import React, {Component} from 'react'
import ReactDom from 'react-dom'

const ProductCollection = (props) => {

    return(
        <div>
            <h3>Products Collection </h3>
            <form onSubmit={(e) => { e.preventDefault(); props.storeDetails(props.productId,props.productName,props.productDescription,props.productQuantity)}}>
            <div className="form-group">
                    <label>Product ID :</label>
                    <input
                    type= "Number"
                    name= "productId" 
                    value= {props.productId}
                    onChange= {props.handleProductId}
                    />
                </div>
                <div className="form-group">
                    <label>Product Name :</label>
                    <input
                    type= "text"
                    name= "productName" 
                    value= {props.productName}
                    onChange= {props.handleProductName}
                    />
                </div>
                <div className="form-group">
                    <label>Description :</label>
                    <input
                    type= "text"
                    name= "productDescription" 
                    value= {props.productDescription}
                    onChange= {props.handleProductDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Quantity :</label>
                    <input
                    type= "Number"
                    name= "productQuantity"
                    value= {props.productQuantity}
                    onChange= {props.handleProductQuantity} 
                    />
                </div>
                <div>
                    <button as="input" type="submit" value="Input">
                        submit
                    </button>
                </div>
                
            </form>
        </div>
    );
}
export default ProductCollection;