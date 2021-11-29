import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';

export class Filters extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
   }
   
    handleChange(e) { 
        const value = e.target.value
        const name = e.target.name
   
        this.props.onFilter({
             [name]: value
        });                
   }
   
    render() {
      return(
        <form className="col-sm-12 col-md-12 col-lg-6">
          <input type="text" name="filterText" id="filterText" placeholder="Search..." className="form-control"  onChange={this.handleChange} /><br />  
        </form>
      )
    }
  }

