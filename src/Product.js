import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { Filters }  from './Filters'
import { ProductForm }  from './ProductForm'
import { ProductTable }  from './ProductTable'

let PRODUCTS = {
    '1': {"id": 1, "category": "Computers", "price": "$400.00", "name": "HP Laptop" },
    '2': {"id": 2, "category": "Software", "price": "$30.99", "name": "Microsoft Office" },
    '3': {"id": 3, "category": "Software", "price": "$550.00","name": "Adobe Suite" },
    '4': {"id": 4, "category": "Computers", "price": "$499.00","name": "Dell Laptop 1520" },
    '5': {"id": 5, "category": "Computers", "price": "1150.00","name": "Dell Laptop 4220" },
    '6': {"id": 6, "category": "Accessories", "price": "10.99","name": "Mouse Pad" },
    '7': {"id": 7, "category": "Computers", "price": "499.99","name": "iPad" }
}

  class Product extends Component {

    constructor(props) {
        super(props); //if we intend on using this.props inside the constructor, you have to call super(props)
        
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)

        this.state = { 
            counter: 0, 
            filterText: "", 
            products: PRODUCTS
        };

        
    }

    //Handler that takes input and passes it to setState
    handleFilter(filterInput) {             //console.log("filter = " + filterInput)
        this.setState(filterInput)
    }

    handleSave(product) {
        if (!product.id) {
             product.id = new Date().getTime()
        }
        this.setState((prevState) => {
             let products = prevState.products
             products[product.id] = product
             return { products }
        });
   }

   //Destroy and delete a product
   handleDestroy(productId) {       //console.log("destroyed... " + productId)
        this.setState((prevState) => {
            let products = prevState.products
            delete products[productId]
            return { products }
        })
    }

   
   

    render() {    
        return (
            <section className="p-5">
                <h1 className="h1 p-2">My Inventory</h1>
                <div className="p-2">
                    <Filters onFilter={this.handleFilter} />
                </div>                
                <div className="p-2 col-sm-12 col-md-12 col-lg-6">               
                    <ProductTable products={this.state.products} filterText={this.state.filterText} onDestroy={this.handleDestroy} />
                </div>
                <div className="p-2">
                    <ProductForm onSave={this.handleSave}  />
                </div>
            </section>
            
        )
    }

  }

  export default Product;


 