import React from 'react';
import { Container } from 'react-bootstrap';
const EmployeeDashBoard = props => {
    return (
        <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
           <h1>hello employee</h1>
        </Container>
    );
};

export default EmployeeDashBoard;