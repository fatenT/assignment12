import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

export class ProductRow extends Component {

    constructor(props) {
        super(props)  
        this.destroy = this.destroy.bind(this)
    }

    destroy() {   
        this.props.onDestroy(this.props.product.id);
   }

   
    render() {
        return(           
                <tr id={this.props.product.id}>
                    <td>{this.props.product.name}</td>
                    <td>{this.props.product.category}</td>
                    <td>{this.props.product.price}</td>
                    <td>
                        <button type="button" onClick={this.destroy} className="btn btn-primary float-end" >Delete</button>
                    </td>
                </tr>           
        )
    }
}


