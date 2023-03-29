import {Container,Nav,Navbar,Button} from 'react-bootstrap';

function Header() {
  return (  
  <Container fluid>
    <Navbar bg="link" expand="lg" >
    
        <Navbar.Brand href="#home" className='text-secondary fs-4 fw-bold'>SESSION DECEMBRE 2022</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto ">
            <Nav.Link href="#" className='text-dark fs-5'>4 déc. 2022 - 19 jan. 2023</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Button style={{backgroundColor: '#0c2461'}} className='fw-bold'>S'rinscrire</Button>{' '}
            
        </Nav>
        </Navbar.Collapse>
     
    </Navbar>
    </Container>
  );
}

export default Header;