import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React from "react";

import "../../css/customer/customer.css";
import { FaUsers} from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import CustomerDoughnut from "./customerDoughnut";
import MiniWidgetsC from "./miniWidgetsC";
import CustomerAnalytics from "./customerAnalytics";
import CustomerTable from "./customerTable";
const Customer = (props) => {

    const reports = [
        { icon: FaUsers, title: "Total Customers", value: "12577", rate: "2.7%", desc: "From previous period" },
        { icon: MdFastfood, title: "Total Orders", value: "13676797", rate: "2.4%", desc: "From previous period" },

    ]
    return (
        <React.Fragment>

            <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
                <Row>
                    <Col className="dash-head">CUSTOMER</Col>
                </Row>

                <Row >
                    <Col lg="8">
                        <Row>
                        <MiniWidgetsC reports={reports} />
                        </Row>

                        <CustomerAnalytics />
                    </Col>
                    <Col lg="4">
                        <Card style={{ width: '100%', boxShadow: " 0 2px 4px rgb(0 0 0 / 8%)" }}>
                            <Card.Body>
                                <CustomerDoughnut></CustomerDoughnut>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            <CustomerTable/>    
            </Container>
            
        </React.Fragment>

    )
}
export default Customer;