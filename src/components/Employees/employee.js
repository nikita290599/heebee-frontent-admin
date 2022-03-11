import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from "react-router-dom";
import EmployeeDashBoard from './employeeDashBoard';
const Employee = props => {
    return(<React.Fragment>
        <Routes>
            <Route path="/" element={<EmployeeDashBoard  sideToggle={props.sideToggle}  />} />
           
        </Routes>
    </React.Fragment>);
};

Employee.propTypes = {
    
};

export default Employee;