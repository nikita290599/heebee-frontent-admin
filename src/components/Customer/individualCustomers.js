
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
      
      <Row>
        <Col className="dash-head">
          Personel Information
        </Col>
      </Row>
      <Row >
        <Col xl={{span:"8",order:"first"}} lg={{span:"8",order:"first"}} md={{span:"12",order:2}} sm={{span:"12",order:2}} xs={{span:"12",order:2}} >
          <Card className="mb-4" style={{backgroundColor:"#73C16A",color:"white"}}>
            <Card.Body >
              <h5><b>Order Analytics</b></h5>
            </Card.Body>
          </Card>
          <Row>
            <Col lg={6} md={6}>
              <Card style={{ backgroundColor: "#518BFF", color: "white" }}>
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1 overflow-hidden">
                      <p className="text-truncate font-size-14 mb-2 text-light">Total Orders</p>
                      <h4 className="mb-0">62</h4>
                    </div>
                    <div className="icon text-light" style={{ fontSize: "24px" }}>
                      <MdFastfood />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6}>
              <Card style={{ backgroundColor: "#FFC257", color: "white" }}>
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1 overflow-hidden">
                      <p className="text-truncate font-size-14 mb-2 text-light" >Total Revenue</p>
                      <h4 className="mb-0">6246</h4>
                    </div>
                    <div className="icon text-light" style={{ fontSize: "24px" }}>
                      <FaRupeeSign />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6}>
              <Card className="mt-4" style={{ backgroundColor: "#FF7FAF", color: "white" }}>
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1 overflow-hidden">
                      <p className="text-truncate font-size-14 mb-2 text-light">Popular Order</p>
                      <h5 className="mb-0" style={{ fontSize: '18px' }}>Chilli cheese Toast</h5>
                    </div>
                    <div className="icon text-light" style={{ fontSize: "24px" }}>
                      <BsTrophyFill />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6}>
              <Card className="mt-4" style={{ backgroundColor: "#8254FF", color: "white" }}>
                <Card.Body>
                  <div className="d-flex">
                    <div className="flex-1 overflow-hidden">
                      <p className="text-truncate font-size-14 mb-2 text-light">Recent Order</p>
                      <h5 className="mb-0" style={{ fontSize: '18px' }}>Ice Americano</h5>
                    </div>
                    <div className="icon  text-light" style={{ fontSize: "24px" }}>
                      <ImHourGlass />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Personel Informtion */}
        <Col xl={{ span: "4", order: "4" }} lg={{ span: "4", order: "4" }} md={{ span: "12", order: "first" }} sm={{ span: "12", order: "first" }} xs={{ span: "12", order: "first" }}>
          <Card>
            <Card.Header className="pt-3 pb-3"  style={{borderBottom:"0 solid white",backgroundColor:"#73C16A",color:"white"}} ><b className="Customer-font ">{currentCustomer.name}</b></Card.Header>
            <Card.Body className="pt-0" style={{overflowX:"auto",paddingRight:"10px"}} >
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

        <Col xl={{ order: "last" }} lg={{ order: "last" }} md={{ order: "last" }} sm={{ order: "last" }} xs={{ order: "last" }}>
          <IndividualOrderTable />
        </Col>
      </Row>
    
      {/* Personel Informtion section ends */}
      {/* sales Analytics */}
      <Row>
        <Col>

        </Col>
      </Row>
    </Container>
  );

}

export default IndividualCustomer;