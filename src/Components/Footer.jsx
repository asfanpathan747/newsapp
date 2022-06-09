import React from "react"
import { Navbar,Container } from "react-bootstrap"
export const Footer=()=>{
    return(
        <div>
        <Navbar bg="light" expand="lg" style={{clear:"both",marginTop:"80px",height:"6rem",boxShadow:"0px 0px 3px black",position:"relative",top:"17px"}}>
        <Container>
            <h5>Copyrights © 2020. All rights reserved by INDIA TODAY NEWS</h5>   
        </Container>
        </Navbar>
        </div>
    )
}