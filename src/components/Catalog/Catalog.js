import React from "react";
import "../../css/customer/customer.css";
import { Routes, Route } from "react-router-dom";
import AddNewProduct from "./AddNewFoodItem/AddNewProduct";
import AddNewCategory from "./AddNewCategory/AddNewCategory";
import AddCategoryToBranches from "./AddNewCategory/AddCategoryToBranches";
import AddNewCatMain from "./AddNewCategory/AddNewCatMain";
class Catalog extends React.Component{
    constructor(props){
        super(props);
    }
 
    render(){
        return(<React.Fragment>
            <Routes>
                <Route path="/" element={<AddNewProduct sideToggle={this.props.sideToggle}   />} />
                <Route path="/AddProduct" element={<AddNewProduct sideToggle={this.props.sideToggle}   />} />
                <Route path="/AddCategory" element={<AddNewCatMain  sideToggle={this.props.sideToggle}   />} />
                {/* <Route path="/AddCategoryBranch" element={<AddCategoryToBranches  sideToggle={this.props.sideToggle}   />} /> */}
            </Routes>
        </React.Fragment>)
        
    }
       

    
}
export default Catalog;