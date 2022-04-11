import React, { useEffect,useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFranchise } from '../../store/actionCreators/Franchise/AddNewFranchiseAction';
import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes';
const AddNewBranch = (props) => {
    const dispatch =useDispatch();
    const franchise = useSelector(state => state.franchise)
    const [selectedFranchise, setSelected] = useState([]);
    const [options, setOptions] = useState([])
    useEffect(() => {
        dispatch(getAllFranchise());
      }, [])
      useEffect(() => {
        let array = []
        if (franchise.data) {
          franchise.data.data.map((item, index) => {
            array.push({ label: item.franchise_name, value: item.franchise_id })
          })
        }
        setOptions(array)
        console.log(array)
      }, [franchise])
    
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
    
      const displayFranchise = () => {
    
        if (options) {
          return <div className='categorySelect'><ReactMultiselectCheckboxes
            options={[{ label: "All", value: "*" }, ...options]}
            placeholderButtonLabel="Franchise"
            getDropdownButtonLabel={getDropdownButtonLabel}
            value={selectedFranchise}
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
                    <div className='form-head'>Add New Branch</div>
                    <div className='form-body'>
                        <form>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Branch Name</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">City Name</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" />
                                </div></Col>


                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Region</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" />
                                </div></Col>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" aria-describedby="emailHelp" />
                                </div></Col>


                            </Row>
                            <Row>
                                <Col> <div className="mb-3 p-2">
                                    <label className="form-label">Franchise</label>
                                    {displayFranchise()}

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

export default AddNewBranch;