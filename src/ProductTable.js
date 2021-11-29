import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { ProductRow }  from './ProductRow'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';

export class ProductTable extends Component {

    constructor(props) {   
        super(props)                
        this.handleDestroy = this.handleDestroy.bind(this)
   }
   
   
    static defaultProps = {
        products: [
          {"category": "None", "price": "0.00", "name":"None"}
        ]
    }

    handleDestroy(id) {             
        this.props.onDestroy(id)
    }

    render(){

        const products = this.props.products
        
       //iterate through JSON objects list to create an array of objects
       var products_arr = Object.keys(products).map((item,idx) => {
        
        var name = products[item];
                           
        var key = idx;
        return name;
    });
            

    //Temporary array to convert JSON objects to array
    let rows=[];

    //Iterate through the array to generate the table rows
    products_arr.forEach((row, idx) => {   

        if (this.props.filterText !== "") {          
            if (row.name.indexOf(this.props.filterText) > -1) {                        
                rows.push(                  
                    <ProductRow 
                    key={row.id}
                    product={row}                    
                    onDestroy={this.handleDestroy} 
                /> 
                )
    
            }
        }
        else {
            rows.push(               
                <ProductRow 
                    key={row.id}
                    product={row}                    
                    onDestroy={this.handleDestroy} 
                /> 
            )
        }

    }    
    
    )

    return (        
        <div>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th></th>
                    </tr> 
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>  
        </div>              
        )
    }
}


