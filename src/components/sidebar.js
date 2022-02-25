import React, { useEffect, useState, useRef } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { OverlayTrigger, Popover, Accordion,Overlay,Tooltip } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import "../css/sidebar.css"
import Header from './header';
import { FaUsers } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
const Sidebar = (props) => {
  const [widthSide, setWidth] = useState("270px");
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
      setWidth("100px");
    }
    if (window.innerWidth > "768") {
      setWidth("270px");
    }


  }, []);


  const clickHandler = () => {

    if (size.width <= "768") {
      if (props.sideToggle === false) { props.setSideToggle(true) } else { props.setSideToggle(false) }
      if (props.sideToggle === false) {
        setWidth("100px");
      }
      else {
        setWidth("10px");
      }
    }
    if (size.width <= "768" && size.width >= "720") {
      if (props.sideToggle === true) { props.setSideToggle(false) } else { props.setSideToggle(true) }
      if (props.sideToggle === false) {
        setWidth("10px");
      }
      else {
        setWidth("100px");
      }
    }

    if (size.width > "768") {
      if (props.sideToggle === true) { props.setSideToggle(false) } else { props.setSideToggle(true) }
      if (props.sideToggle === false) {
        setWidth("270px");
      }
      else {
        setWidth("100px");
      }
    }

  }
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <React.Fragment>
      <Header widthSide={widthSide} handle={props.handle} />
      <div id="sidebar-main" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', zIndex: "1001", position: "fixed", top: "0" }} className={props.sideToggle === true ? "widthOfSide" : "widthUntoggled"}>
        <CDBSidebar backgroundColor="#FFF"  >
          <CDBSidebarHeader prefix={<img id="mainLeftTrigger" src={logo} width="26px" alt="logo" onClick={clickHandler} className="sidebar-logo"></img>} >
            <a href="/" className="text-decoration-none" style={{ color: '#664d03' }}>
              HEEBEE
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu open={props.sideToggle} defaultOpen="false" >
              <NavLink to="/" >
                <CDBSidebarMenuItem icon="columns"> Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/customer" >
                <Overlay target={target.current} show={show} placement="right">
                  {(props) => (
                    <div id="overlay-example" {...props}>
                      Customer
                    </div>
                  )}
                </Overlay>

                <CDBSidebarMenuItem icon="user" ref={target} onFocus={()=>{setShow(!show)}} onMouseEnter={() => {if(widthSide==="100px")setShow(true)}} onMouseLeave={()=>{setShow(false)}} >Customer</CDBSidebarMenuItem>


              </NavLink>
              <Accordion className='sidebar-acc'>
                <Accordion.Item eventKey="0" className="sidebar-submenu">
                  <Accordion.Header >
                    <div className='d-flex justify-content-start submenu-inner'>
                      <FaUsers className='w-25' /><div className='w-75'>Employees</div>
                    </div>

                  </Accordion.Header>
                  <Accordion.Body>
                    <section className='mb-3'><FiUserPlus className='col-3' />
                      <span className='col-9 pl-2'>Add new</span></section>
                    <section><FiUserPlus className='col-3' />
                      <span className='col-9 pl-2'>Add new</span></section>


                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1" className="sidebar-submenu">
                  <Accordion.Header>  <div className='d-flex justify-content-start submenu-inner'>
                    <FaUsers className='w-25' /><div className='w-75'>Employees</div>
                  </div></Accordion.Header>
                  <Accordion.Body>


                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <NavLink to="/catalog" >
                <CDBSidebarMenuItem icon="clipboard">Catalog</CDBSidebarMenuItem>
              </NavLink>
              <NavLink to="/franchise" target="_blank" >
                <CDBSidebarMenuItem icon="industry">Franchise</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </React.Fragment>

  );
};
export default Sidebar;