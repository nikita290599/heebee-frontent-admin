import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes';
import { useDispatch, useSelector } from 'react-redux';
import { getBranches } from '../../../store/actionCreators/Branch/BranchAction';
const AddNewProduct = (props) => {
    const dispatch =useDispatch();
    const branch = useSelector(state => state.branch)
    const [selectedBranches, setSelected] = useState([]);
    const [options, setOptions] = useState([])
    useEffect(() => {
        dispatch(getBranches());
      }, [])
      useEffect(() => {
        let array = []
        if (branch.data) {
          branch.data.data.map((item, index) => {
            array.push({ label: item.branch_name, value: item.branch_id })
          })
        }
        setOptions(array)
        console.log(array)
      }, [branch])
    
    function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
        if (value && value.some((o) => o.value === "*")) {
          return `${placeholderButtonLabel}: All`;
        } else {
          return `${placeholderButtonLabel}: ${value.length} selected`;
        }
      }
      function onChange(value, event) {
        if (event.action === "select-option" && event.option.value === "*") {
          this.setState(this.options);
        } else if (
          event.action === "deselect-option" &&
          event.option.value === "*"
        ) {
          this.setState([]);
        } else if (event.action === "deselect-option") {
          this.setState(value.filter((o) => o.value !== "*"));
        } else if (value.length === this.options.length - 1) {
          this.setState(this.options);
        } else {
          this.setState(value);
        }
      }
    
      const displayBranch = () => {
    
        if (options) {
          return <div className='categorySelect'><ReactMultiselectCheckboxes
            options={[{ label: "All", value: "*" }, ...options]}
            placeholderButtonLabel="Branches"
            getDropdownButtonLabel={getDropdownButtonLabel}
            value={selectedBranches}
            onChange={onChange}
            setState={setSelected}
            required
          /></div>
        }
    
      }
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
        <div className='row d-flex justify-content-center'>
            <div className='form-container'>
                <div className='form-head'>Add New Food Item</div>
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
                                {displayBranch()}
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
                        <div className="p-2"><button className='btn btn-primary btn-lg ' >Submit</button></div>
                        
                    </form>
                </div>
            </div>
        </div>
    </Container>
    );
};

export default AddNewProduct;