import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import './App.css';
import Dashboard from './components/Dashboard/dashboard';
import Customer from './components/Customer/customer';
import AllCustomer from './components/Customer/Allcustomer';
import React, { useState } from 'react';
import Footer from './components/footer';
import Sidebar2 from './components/Sidebar2';
function App() {
  const [sideToggle,setSideToggle]=useState(false);
  const handle = useFullScreenHandle();
  return (
    <Router>
    <FullScreen handle={handle}>
    <React.Fragment>

<Sidebar handle={handle} setSideToggle={setSideToggle} sideToggle={sideToggle}/>
<Routes>
  {/* <Route path="*" element={<Error />} /> */}
  <Route exact path='/' element={<Dashboard sideToggle={sideToggle}/>}></Route>
  <Route exact  path='/allCustomer' element={<AllCustomer sideToggle={sideToggle}/>}></Route>
  <Route exact path='/customer' element={<Customer sideToggle={sideToggle}/>}></Route>
 

</Routes>
<Footer/>

</React.Fragment>
    </FullScreen>
         

    </Router>


    // <div className="App">
    //   <Sidebar />
    // </div>

  );
}

export default App;
