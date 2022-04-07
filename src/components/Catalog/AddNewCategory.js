import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const AddNewCategory = (props) => {
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
        <div className='row d-flex justify-content-center'>
            <div className='form-container'>
                <div className='form-head'>Add New Category</div>
                <div className='form-body'>
                    <form>
                        <Row>
                            <Col> <div className="mb-3 p-2">
                                <label className="form-label">Category Name</label>
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
                                <label className="form-label">Branch</label>
                                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                    <option selected>Borivali</option>
                                    <option value="1">Branch 2</option>
                                    <option value="2">Branch 3</option>
                                    <option value="3">Branch n</option>
                                </select>
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

export default AddNewCategory;