import React from "react";
import "../../css/customer/customer.css";
import { Routes, Route } from "react-router-dom";
import AddNewBranch from "./AddNewBranch";
import AddNewFranchise from "./AddNewFranchise";
import AllBranches from "./AllBranches";
class Branch extends React.Component{
    constructor(props){
        super(props);
    }
 
    render(){
        return(<React.Fragment>
            <Routes>
                <Route path="/" element={<AddNewBranch sideToggle={this.props.sideToggle}   />} />
                <Route path="/AddBranch" element={<AddNewBranch  sideToggle={this.props.sideToggle}   />} />
                <Route path="/AllBranch" element={<AllBranches  sideToggle={this.props.sideToggle}   />} />
                <Route path="/AddFranchise" element={<AddNewFranchise  sideToggle={this.props.sideToggle}   />} />
               
            </Routes>
        </React.Fragment>)
        
    }
       

    
}
export default Branch;