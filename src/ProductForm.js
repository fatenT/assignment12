import React, {Component} from 'react';

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

export class ProductForm extends Component {

    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
       }
       
   }
   
    handleSave(e) {
        this.props.onSave(this.state.product)
        this.setState({
             product: Object.assign({}, RESET_VALUES), errors: {}
        })
        e.preventDefault(); //Prevent form from triggering HTTP POST
   }

   handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        })
    }

     
    render() {      

      return(
        <div className="col-sm-12 col-md-12 col-lg-6">
            <h2>Add a New Product</h2>
        
            <form className="col-sm-12 col-md-12 col-lg-6">
            
                <p>
                    <label>Name</label><br />
                    <input type="text" name="name" id="name" className="form-control" onChange={this.handleChange} value={this.state.product.name} />
                </p>
                <p>
                    <label>Category</label><br />
                    <input type="text" name="category" id="category" className="form-control" onChange={this.handleChange} value={this.state.product.category} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" name="price" id="price" className="form-control" onChange={this.handleChange} value={this.state.product.price} />
                </p>
                <p>
                    <button type="button" className="btn-primary" onClick={this.handleSave}>Save</button> 
                </p>
            
            </form>
        </div>
      )
    }
  }
