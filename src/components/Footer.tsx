import { useState } from 'react';
import { Container, Form, Row, Col,Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

export default function Footer() {

  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [validated, setValidated] = useState<boolean>(false);
  const [nom, setNom] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>();

  const setData = () =>{
    setNom("")
    setSubject("")
    setEmail("")
    setNumber("")
    setSubject("")
  }




  return (
    <Container fluid >
       <ToastContainer/>
      <Row  >
        <Col xs={12} md={4} className="text-white order-first my-2 " style={{ backgroundColor: '#0c2461' }}>
          <p className="fw-bold fs-2">NOUS ECRIRE</p>
          <hr style={{ width: 50, fontSize:15 }} />
          <p className="fs-5">Envoyez-nous vos demandes</p>
        </Col>
        <Col xs={12} md={8} className="bg-light my-2 ">
          <Form >
            <Row>
              <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  type="text"
                  placeholder="Nom"
                  size="sm"
                
                />
           
           </Form.Group>
              </Col>

              <Col xs={12} sm={6}>
              <Form.Group className="mb-2" controlId="validationCustom03">
                <Form.Control
                type="email"
                size="sm"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="Email"
              />
           
           </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={6}>
              <Form.Group className="mb-2 " controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                  minLength={8}
                  placeholder="Téléphone"
                  size="sm"
               
              />
            <Form.Control.Feedback type="invalid"> Numéro de téléphone non valide</Form.Control.Feedback>
           </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
              <Form.Group className="mb-2" controlId="validationCustom01">
              <Form.Control
                type="text"
                size="sm"
                placeholder="Subject"
                pattern="^[a-zA-Z]{5,}$"               
              />
           
           </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Message"  minLength={10}/>
            </Form.Group>
            <Button variant="danger" type='submit'>ENVOYER</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
