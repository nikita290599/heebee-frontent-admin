
import React, { useState } from "react"
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import "../../css/customer/individualCustomer.css";
import Avataars from "./IndividualCustomer/Avataars";
import { FaRupeeSign } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { ImHourGlass } from "react-icons/im";
import { BsTrophyFill } from "react-icons/bs";
import IndividualOrderTable from "./IndividualCustomer/individualOrderTable";
const IndividualCustomer = (props) => {
  const [currentCustomer, setCustomer] = useState(props.currentCustomer)
  console.log(currentCustomer);
  return (
    <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
      {/* Personel Informtion */}
      <Row>
        <Col className="dash-head">
          Personel Information
        </Col>
      </Row>
      <Row >
      <Col xl={8} lg={8} md={12}  >
          <Card className="mb-4">
            <Card.Body>
              <h4>Order Analytics</h4>
            </Card.Body>
          </Card>
          <Row>
            <Col lg={6} md={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1 overflow-hidden">
                      <p className="text-truncate font-size-14 mb-2">Total Orders</p>
                      <h4 className="mb-0">62</h4>
                    </div>
                    <div className="icon icon-color" style={{ fontSize: "24px" }}>
                      <MdFastfood />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6}>
              <Card>
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1 overflow-hidden">
                      <p className="text-truncate font-size-14 mb-2">Total Revenue</p>
                      <h4 className="mb-0">6246</h4>
                    </div>
                    <div className="icon icon-color" style={{ fontSize: "24px" }}>
                      <FaRupeeSign />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6}>
              <Card className="mt-4">
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1 overflow-hidden">
                      <p className="text-truncate font-size-14 mb-2">Popular Order</p>
                      <h5 className="mb-0" style={{ fontSize: '18px' }}>Chilli cheese Toast</h5>
                    </div>
                    <div className="icon icon-color" style={{ fontSize: "24px" }}>
                      <BsTrophyFill />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6}>
              <Card className="mt-4">
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1 overflow-hidden">
                      <p className="text-truncate font-size-14 mb-2">Recent Order</p>
                      <h5 className="mb-0" style={{ fontSize: '18px' }}>Ice Americano</h5>
                    </div>
                    <div className="icon icon-color" style={{ fontSize: "24px" }}>
                      <ImHourGlass />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={{span:"4",order:4}} lg={{span:"4",order:4}} md={{span:"12",order:"first"}}>
          <Card>
          <Card.Header><b>{currentCustomer.name}</b></Card.Header>
            <Card.Body >
            <table className="table table-borderless indi-table mb-0">
                  <tbody>
                  <tr>
                          <th scope="row">Phone</th>
                          <td>{currentCustomer.telephone}</td>
                        </tr>
                        
                    <tr>
                      <th scope="row">Email</th>
                      <td>{currentCustomer.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Gender</th>
                      <td>{currentCustomer.gender}</td>

                    </tr>
                    <tr>
                      <th scope="row">Account Creation</th>
                      <td>{currentCustomer["order date"]}</td>
                    </tr>
                    <tr>
                      <th scope="row">Address</th>
                      <td>{currentCustomer.address}</td>
                    </tr>
                    <tr>
                      <th scope="row">Group</th>
                      <td>{"GroupName"}</td>
                    </tr>
                  </tbody>
                </table>
            </Card.Body>
          </Card>
        </Col>
        {/*  Personel Informtion Ends*/}
        {/* Order Analytics */}
       
        <Col lg={{order:"last"}}>
          <IndividualOrderTable/>
        </Col>
      </Row>
      {/* Personel Informtion section ends */}
    </Container>
  );

}

export default IndividualCustomer;