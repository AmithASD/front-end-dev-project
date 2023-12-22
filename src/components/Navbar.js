import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assessts/css/navbar.css";
import Logo from "../assessts/img/Logo.png";
import React from 'react'

function CollapsibleExample() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary nav-outer">
            <Container>
                <Navbar.Brand href="/" style={{fontSize:"26px" , color:"white"} }><img src={Logo} className='logo'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className='right-outer'>
                        <Nav className='link-page'>
                            <Nav.Link href="/">SERVICES</Nav.Link>
                            <Nav.Link href="/">ABOUT US</Nav.Link>
                            <Nav.Link href="/">CONTACT US</Nav.Link>
                            <Nav.Link href="/">CAREERS</Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default CollapsibleExample;
