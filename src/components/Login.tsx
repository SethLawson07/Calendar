import { Row, Col, Button,Container,Form } from 'react-bootstrap';
import welcome from '../assets/images/welcome.svg';


export default function Login() {
  return (
    
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="g-0 my-5">
        
      <Col sm={12} md={6} className="order-md-1 order-1">
          <img src={welcome} alt="bg-img" style={{ width: '100%', height: '100%' }} className="img-fluid" />
        </Col>

        <Col sm={12} md={6} className="order-md-2 order-2">
        <Form className='my-5'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="johndoe@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" />
            </Form.Group>

            <Button variant="outline-primary" href='home' type='submit' className="fs-4 fw-bold my-1" size='sm'> Login </Button>
        
        </Form>
        </Col>   
      </Row>
    </Container>
  );
}

