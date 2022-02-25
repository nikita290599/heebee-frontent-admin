import Sidebar from './components/sidebar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import './App.css';
import Dashboard from './components/Dashboard/dashboard';
import Customer from './components/Customer/customer';
import React, { useState } from 'react';
import Footer from './components/footer';
function App() {
  const [sideToggle,setSideToggle]=useState(true);
  const handle = useFullScreenHandle();
  return (
    <Router>
    <FullScreen handle={handle}>
    <React.Fragment>

<Sidebar handle={handle} setSideToggle={setSideToggle} sideToggle={sideToggle}/>
<Routes>
  {/* <Route path="*" element={<Error />} /> */}
  <Route  path='/' element={<Dashboard sideToggle={sideToggle}/>}></Route>
  <Route  path='/customer' element={<Customer sideToggle={sideToggle}/>}></Route>

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
