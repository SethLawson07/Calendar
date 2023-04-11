import { useState } from 'react';
import { Container, Form, Row, Col,Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import logo from "../assets/images/logo1.jpg"
import * as Icon from "react-bootstrap-icons"
import CustomHr from './CustomHr';

function MainEnd() {

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
    <Container id='contact'>
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


function Footer() {
  return (
    <Container fluid style={{ backgroundColor: "#0c2461" }} className="text-white">
      <Row className="align-items-center justify-content-center">
        <Col xs={12} sm={6} md={6} className="text-white order-first my-5 d-flex flex-column align-items-center">
          <img src={logo} alt="Logo" width={200} height={200} />
          <CustomHr width="10%" height="2px" color="white" />
          <p className="fs-5 ml-5">Dos Con Dos </p>
        </Col>
        <Col xs={12} sm={6} md={6} className="my-5 ">
          <p className='text-uppercase'>Contactez-nous</p>
          <CustomHr width="10%" height="1px" color="white" />
          <p>
            <Icon.PinMapFill /> 2323 Rue Galvani, Québec, QC, CA G1N 4H7
          </p>
          <CustomHr width="50%" height="1px" color="white" />
          <p>
            <Icon.TelephoneFill /> 4189328666
          </p>
          <CustomHr width="50%" height="1px" color="white" />
          <p>
            <Icon.EnvelopeFill /> info@doscondos.com
          </p>
        </Col>
      </Row>
      <CustomHr width="100%" height="2px" color="white" />
      <Row className="mx-5 my-2">
        <Col xs={12} sm={8}>
          <p>Dos Con Dos © {new Date().getFullYear()} </p>
        </Col>
        <Col xs={12} sm={4} className="d-flex justify-content-end">
          <Icon.Facebook size={25} />
        </Col>
      </Row>
    </Container>
  );
}



export {MainEnd,Footer}