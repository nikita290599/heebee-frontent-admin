import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "../css/header.css";
import logo from "../assets/logo.png"
import menu from "../assets/menu-2-fill.png";
import user from "../assets/icons/avataaars.png"
import { AiOutlineUser } from "react-icons/ai";
import { RiWallet2Line } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineUnlock } from "react-icons/ai";
import { BsPower } from "react-icons/bs";


const Header = (props) => {

    return (
        <React.Fragment>
            <div className="container-fluid fixed-top bg-light text-light p-2" style={{ zIndex: "500", height: "77px", boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}>
                <div className="w-100 h-100 d-flex justify-content-end align-items-center">
                    <div className="header-logo"><img src={logo} width="26px" alt="header logo"></img></div>
                    {window.innerWidth > 769 ? <img className="bar-icon " src={menu} style={{ left: `${props.widthSide}`, zIndex: "1003" }} onClick={() => { document.getElementById('mainLeftTrigger').click() }} /> : <img className="bar-icon" src={menu} style={{ left: "100px", zIndex: "1003" }} onClick={() => { document.getElementById('mainLeftTrigger').click() }} />}
                    <button className="btn" onClick={props.handle.enter}>
                        <FontAwesomeIcon className="btn-fullscreen" icon={faExpand} />
                    </button>
                    {/* Notifications */}
                    <Dropdown id="alert-button" className="m-3 me-1">
                        <Dropdown.Toggle id="dropdown-basic" className="m-auto">
                            <FontAwesomeIcon icon={faBell} style={{ color: "#879095", fontSize: "20px", margin: "auto" }} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <div className="ml-3" style={{ width: "330px", height: "340px", overflow: "hidden" }}>
                                <h6 className="p-2">Notifications</h6>
                                <div style={{ height: "340px", overflowY: "auto",width:"100%" }}>
                                    <Dropdown.Item className="p-0 pt-2" href="#/action-1">
                                        <div className="d-flex">
                                            <div style={{ width: "20%" }} className="d-flex justify-content-center align-items-start"><img src={user} width="50px" alt="header logo" ></img></div>
                                            <div style={{ width: "80%" }}>
                                                <h6>Your order is placed</h6>
                                                <p style={{ fontSize: "12px", whiteSpace: "normal" }}>Some relevent text that give the details regarding the Notifications</p>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="p-0 pt-2" href="#/action-1">
                                        <div className="d-flex">
                                            <div style={{ width: "20%" }} className="d-flex justify-content-center align-items-start"><img src={user} width="50px" alt="header logo" ></img></div>
                                            <div style={{ width: "80%" }}>
                                                <h6>Your order is placed</h6>
                                                <p style={{ fontSize: "12px", whiteSpace: "normal" }}>Some relevent text that give the details regarding the Notifications</p>
                                            </div>
                                        </div>
                                    </Dropdown.Item><Dropdown.Item className="p-0 pt-2" href="#/action-1">
                                        <div className="d-flex">
                                            <div style={{ width: "20%" }} className="d-flex justify-content-center align-items-start"><img src={user} width="50px" alt="header logo" ></img></div>
                                            <div style={{ width: "80%" }}>
                                                <h6>Your order is placed</h6>
                                                <p style={{ fontSize: "12px", whiteSpace: "normal" }}>Some relevent text that give the details regarding the Notifications</p>
                                            </div>
                                        </div>
                                    </Dropdown.Item><Dropdown.Item className="p-0 pt-2" href="#/action-1">
                                        <div className="d-flex">
                                            <div style={{ width: "20%" }} className="d-flex justify-content-center align-items-start"><img src={user} width="50px" alt="header logo" ></img></div>
                                            <div style={{ width: "80%" }}>
                                                <h6>Your order is placed</h6>
                                                <p style={{ fontSize: "12px", whiteSpace: "normal" }}>Some relevent text that give the details regarding the Notifications</p>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item className="p-0 pt-2" href="#/action-1">
                                        <div className="d-flex">
                                            <div style={{ width: "20%" }} className="d-flex justify-content-center align-items-start"><img src={user} width="50px" alt="header logo" ></img></div>
                                            <div style={{ width: "80%" }}>
                                                <h6>Your order is placed</h6>
                                                <p style={{ fontSize: "12px", whiteSpace: "normal" }}>Some relevent text that give the details regarding the Notifications</p>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                </div>
   
                               
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* user SPECIFIC */}
                    <Dropdown id="user-button" className="">
                        <Dropdown.Toggle className="" variant="light" id="dropdown-user">
                            <span >
                                <img src={user} width="28px" height="28px" style={{ borderRadius: "50%" }}></img>
                                <span className="mx-2">Admin</span>
                            </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><span><AiOutlineUser className="mr-3" /> Profile</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><span><RiWallet2Line className="mr-3" /> My Wallet</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><span><AiOutlineSetting className="mr-3" /> Settings</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-4"><span><AiOutlineUnlock className="mr-3" /> Lock Screen</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-4"><span style={{ color: "red" }}><BsPower className="mr-3 " /> Signout</span></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header; 