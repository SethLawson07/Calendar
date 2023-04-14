import { useState } from 'react';
import {Container,Nav,Navbar,Button,Carousel,Row,Col} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'
import logo from "../assets/images/logo.png"
import  img1  from "../assets/images/img1.jpg";
import  img2  from "../assets/images/img2.jpg";

function Header() {
  return (  
  <Container fluid className="p-0">
    <Navbar bg="link" expand="lg" >
    
    <Navbar.Collapse id="basic-navbar-nav">    
    <Nav className="mx-auto ">
        <Nav.Link href="#" >
          <img src={logo} alt="Logo" width={150} height={150} />
        </Nav.Link>
    </Nav>
    </Navbar.Collapse>
 
</Navbar>
    <Navbar bg="link" expand="lg" >
    <Navbar.Brand href="#home" className='text-secondary fs-4 fw-bold'></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">    
        <Nav className="mx-auto text-uppercase fs-6 text-dark ">
            <Nav.Link href="#" >Accueil</Nav.Link>
            <Nav.Link href="#timetable" >Calendrier</Nav.Link>
            <Nav.Link href="#contact" >Contact</Nav.Link>
            <Nav.Link href="#" >Se connecter / s'inscrire</Nav.Link>
        </Nav>
        </Navbar.Collapse>
     
    </Navbar>
    <ControlledCarousel/>
    </Container>
  );
}

function MainTop({ totalPrice }) {
  return (
    <Container>
    <Row className="d-block d-sm-none">
      <Col xs={12} className="text-center text-secondary fs-4 fw-bold mb-3">
        SESSION DECEMBRE 2022
      </Col>
      <Col xs={12} className="text-center text-dark fs-5 mb-3">
        4 déc. 2022 - 19 jan. 2023
      </Col>
      <Col xs={12} className="text-center mb-3">
        {totalPrice == 0 ? (
          <Button
            style={{ backgroundColor: "#0c2461" }}
            className="fw-bold"
            disabled
          >
            S'inscrire
          </Button>
        ) : (
          <Button
            style={{ backgroundColor: "#0c2461" }}
            disabled
            className="fw-bold pr-5"
          >
            S'inscrire (${totalPrice})
          </Button>
        )}
      </Col>
    </Row>
    
    <Row className="d-none d-sm-flex">
      <Col md={4} className="text-left text-secondary fs-4 fw-bold">
        SESSION DECEMBRE 2022
      </Col>
      <Col md={4} className="text-center text-dark fs-5">
        4 déc. 2022 - 19 jan. 2023
      </Col>
      <Col md={{ span: 2, offset: 2 }} className="text-right">
        {totalPrice == 0 ? (
          <Button
            style={{ backgroundColor: "#0c2461" }}
            className="fw-bold"
            disabled
          >
            S'inscrire
          </Button>
        ) : (
          <Button
            style={{ backgroundColor: "#0c2461" }}
            disabled
            className="fw-bold pr-5"
          >
            S'inscrire (${totalPrice})
          </Button>
        )}
      </Col>
    </Row>
  </Container>
  

  );
}





function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img1}
          alt="First slide"

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img2}
          alt="Second slide"
        
        />
      </Carousel.Item>
    </Carousel>
  );
}

export {Header,MainTop};