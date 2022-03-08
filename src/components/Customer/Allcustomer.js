import { Container} from "react-bootstrap";
import React from "react";
import CustomerTable from "./customerTable";
const AllCustomer = (props) => {


    return (
        <React.Fragment>

            <Container fluid className={props.sideToggle === true ? "closeDash" : "openDash"} style={{ paddingTop: "95px", backgroundColor: "#F1F5F7" }} >
               
            <CustomerTable products={props.products} currentCustomer={props.currentCustomer} setCustomer={props.setCustomer}/>    
            </Container>
            
        </React.Fragment>

    )
}
export default AllCustomer;