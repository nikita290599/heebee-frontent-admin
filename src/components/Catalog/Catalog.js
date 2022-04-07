import React from "react";
import "../../css/customer/customer.css";
import { Routes, Route } from "react-router-dom";
import AddNewProduct from "./AddNewProduct";
import AddNewCategory from "./AddNewCategory";
class Catalog extends React.Component{
    constructor(props){
        super(props);
    }
 
    render(){
        return(<React.Fragment>
            <Routes>
                <Route path="/" element={<AddNewProduct sideToggle={this.props.sideToggle}   />} />
                <Route path="/AddProduct" element={<AddNewProduct sideToggle={this.props.sideToggle}   />} />
                <Route path="/AddCategory" element={<AddNewCategory  sideToggle={this.props.sideToggle}   />} />
               
            </Routes>
        </React.Fragment>)
        
    }
       

    
}
export default Catalog;