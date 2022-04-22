import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import AddAdminmain from './AddAdminmain';

class User extends React.Component {


  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<AddAdminmain sideToggle={this.props.sideToggle} />} />
               </Routes>
      </React.Fragment>
    );
  }



};


export default User;