import { useState } from 'react';
import { Row, Col, Button,Container,Form } from 'react-bootstrap';
import welcome from '../assets/images/welcome.svg';
import { useNavigate } from "react-router-dom";


export default function Login() {

  const [email, setEmail] = useState<string>("johndoe@example.com");
  const [password, setPassword] = useState<string>("johndoe");
  const [validated, setValidated] = useState<boolean>(false);
  let navigate = useNavigate();

   /**
     * Handles the submission of a form event and performs form validation.
     * @param {Event} event - The event object representing the form submission.
     * @returns {void}
     */
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        event.stopPropagation();
      
        const form = event.currentTarget;
        const isValid = form.checkValidity();
      
        setValidated(true);
      
        if (isValid) {
          navigate('/home')
        }
    };
  return (
    
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="g-0 my-5">
        
      <Col sm={12} md={6} className="order-md-1 order-1">
          <img src={welcome} alt="bg-img" style={{ width: '100%', height: '100%' }} className="img-fluid" />
        </Col>

        <Col sm={12} md={6} className="order-md-2 order-2">
        <Form className='my-5'  noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="validationCustom03">
             <Form.Label>Email address</Form.Label>
             <Form.Control
               type="email"
               required
               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
               placeholder="johndoe@example.com"
               onChange={(e) => setEmail(e.target.value)} 
               value={email}
             />
            <Form.Control.Feedback type="invalid"> Email incorrect</Form.Control.Feedback>
          </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="" 
                  required
                  minLength={6} 
                  maxLength={12}
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password}
                  />
            </Form.Group>

            <Button variant="outline-primary"  type='submit' className="fs-4 fw-bold my-1" size='sm'> Login </Button>
        
        </Form>
        </Col>   
      </Row>
    </Container>
  );
}

