import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const AddNewProduct = (props) => {
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
        <div className='row d-flex justify-content-center'>
            <div className='form-container'>
                <div className='form-head'>Add Food Item</div>
                <div className='form-body'>
                    <form>
                        <Row>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Product Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">SKU</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>
                           

                        </Row>
                        <Row>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Items Available</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Description</label>
                                <input type="textarea" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>
                        

                        </Row>
                        <Row>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Image Upload</label>
                                <input type="file" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>
                            <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Status</label>
                                    <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected>Active</option>
                                        <option value="1">Inactive</option>
                                    </select>
                                </div></Col>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Branch</label>
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option selected>Borivali</option>
                                    <option value="1">Branch 2</option>
                                    <option value="2">Branch 3</option>
                                    <option value="3">Branch n</option>
                                </select>
                            </div></Col>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Food Type</label>
                                <div className='d-flex'>
                                    <div className="form-check me-3">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                           Veg
                                        </label></div>
                                    <div className="form-check ">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                           Non Veg
                                        </label>
                                    </div>
                                </div>
                            </div></Col>

                        </Row>
                        <Row>
                        <Col> <div className="mb-3 p-2">
                                <label className="form-label">product Type</label>
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option selected>Kitchen</option>
                                    <option value="1">Barista</option>
                                </select>
                            </div></Col>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Price</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>

                        </Row>
                        <Row>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Billing Address</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Shipping Address</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" />
                            </div></Col>

                        </Row>
                        <div className="p-2"><button className='btn btn-primary btn-lg ' >Submit</button></div>
                        
                    </form>
                </div>
            </div>
        </div>
    </Container>
    );
};

export default AddNewProduct;