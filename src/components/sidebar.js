import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import "../css/sidebar.css"
import Header from './header';
import { FaUsers } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa";
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
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
            <div id="mainLeftTrigger" className='d-flex justify-content-center align-items-center' style={{ height: "77px" }} onClick={clickHandler}>
              <img src={logo} width="26px" alt="logo"  ></img>
            </div>

          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square" >
              <SubMenu title="Dashboard" icon={<RiDashboardFill />}>
              <NavLink to="/" ><MenuItem>My Dashboard</MenuItem></NavLink>
              </SubMenu>
            
              <SubMenu title="Customer" icon={<FaUsers />}>
              <MenuItem><NavLink exact="true" to="/customer" >Customer Dashboard</NavLink></MenuItem>
              <MenuItem><NavLink exact="true" to="/allCustomer">All Customers</NavLink></MenuItem>
              </SubMenu>
              <SubMenu title="Employees" icon={<GrUserWorker />}>
                <MenuItem>All Employees</MenuItem>
                <MenuItem>Add New</MenuItem>
              </SubMenu>
              <SubMenu title="Catalog" icon={<FaClipboardList />}>
                <MenuItem>Add Category</MenuItem>
                <MenuItem>Add Food Item</MenuItem>
              </SubMenu>
              <SubMenu title="Franchise" icon={<FaClipboardList />}>
                <MenuItem>All Branch</MenuItem>
                <MenuItem>Add Branch</MenuItem>
                <MenuItem>Add Franchise</MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>

        </ProSidebar>
      </div>
    </React.Fragment>

  );
};
export default Sidebar;