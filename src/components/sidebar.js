import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

import Header from './header';
import { FaUsers } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { RiBuilding2Fill} from "react-icons/ri";
import {ImUserTie} from "react-icons/im";
import { FaClipboardList } from "react-icons/fa";
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "../css/sidebar.css";
import "../css/sidebar.scss";
const Sidebar = (props) => {
  const [widthSideMax, setWidthMax] = useState("240px");
  const [widthOfSideMin, setWidthMin] = useState("80px");
  const [widthSide,setWidthSide]=useState("270px");
  const size = useWindowSize();
  function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
      width: undefined
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  useEffect(() => {

    if (window.innerWidth <= "768") {
      setWidthMax("0");
      setWidthMin("80px");
    }
    if (window.innerWidth > "768") {
      setWidthMax("240px");
      setWidthMin("80px");
      setWidthSide("270px");
    }


  }, []);


  const clickHandler = () => {
    if (size.width <= "768") {
      if (props.sideToggle === false) { props.setSideToggle(true)  } else { props.setSideToggle(false)  }

    }
    if (size.width > "768") {
      if (props.sideToggle === true) { props.setSideToggle(false) ; setWidthSide("270px")} else { props.setSideToggle(true); setWidthSide("100px") }

    }

  }


  return (
    <React.Fragment>
      <Header handle={props.handle} widthSide={widthSide} />
      <div id="sidebar-main" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', zIndex: "1001", position: "fixed", top: "0" }} className={props.sideToggle === true ? "widthOfSide" : "widthUntoggled"}>
        <ProSidebar id="my-sidebar" width={widthSideMax} collapsedWidth={widthOfSideMin} collapsed={props.sideToggle} >
          <SidebarHeader >
            <div id="mainLeftTrigger" className='w-100 ' style={{ height: "77px" }} onClick={clickHandler}>
             <div className='h-100 d-flex justify-content-center align-items-center'><img src={logo} width="26px" alt="logo" className='' ></img><div className='w-75 heebee-logo '>HeeBee</div></div> 
            </div>

          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="round" >
              <SubMenu title="Dashboard" icon={<RiDashboardFill />}>
              <MenuItem>My Dashboard<NavLink to="/" /></MenuItem>
              </SubMenu>
            
              <SubMenu title="Customer" icon={<FaUsers />}>
              <MenuItem>Customer Dashboard<NavLink exact="true" to="/customer" /></MenuItem>
              <MenuItem>All Customers<NavLink exact="true" to="/customer/allCustomer"/></MenuItem>
              <MenuItem>Add New Customers<NavLink exact="true" to="/customer/addCustomer"/></MenuItem>
              </SubMenu>
              <SubMenu title="Employees" icon={<ImUserTie/>}>
                <MenuItem>All Employees<NavLink exact="true" to="/employee" /></MenuItem>
                <MenuItem>Add New<NavLink exact="true" to="/employee/addNew" /></MenuItem>
              </SubMenu>
              <SubMenu title="Catalog" icon={<FaClipboardList />}>
                <MenuItem>Add Category<NavLink to="/catalog/AddCategory" /></MenuItem>
                <MenuItem>Add Food Item<NavLink to="/catalog/AddProduct" /></MenuItem>
              </SubMenu>
              <SubMenu title="Franchise" icon={<RiBuilding2Fill/>}>
                <MenuItem>All Branch<NavLink to="/branch/AllBranch" /></MenuItem>
                <MenuItem>Add Branch<NavLink to="/branch/AddBranch" /></MenuItem>
                <MenuItem>Add Franchise<NavLink to="/branch/AddFranchise" /></MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>

        </ProSidebar>
      </div>
    </React.Fragment>

  );
};
export default Sidebar;