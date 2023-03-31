import { useState } from 'react';
import { Container, Form, Row, Col,Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

export default function Footer() {

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


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();
  
    const form = event.currentTarget;
    const isValid = form.checkValidity();
  
    setValidated(true);
  
    if (isValid) {
     
      toast.success("Message envoyé avec succès",{position:"top-center"})
      setData()
    }
};

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
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} sm={6}>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Control
                  type="text"
                  placeholder="Nom"
                  size="sm"
                  required
                  pattern="^[a-zA-Z]{3,}$"
                  onChange={(e) => setNom(e.target.value)} 
                  value={nom}
                
                />
            <Form.Control.Feedback type="invalid"> Le nom doit contenir au moins 3 caractères et pas de chiffres</Form.Control.Feedback>
            
           </Form.Group>
              </Col>

              <Col xs={12} sm={6}>
              <Form.Group className="mb-2" controlId="validationCustom03">
                <Form.Control
                type="email"
                required
                size="sm"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="johndoe@example.com"
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                
              />
              <Form.Control.Feedback type="invalid"> Email incorrect</Form.Control.Feedback>
           </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={6}>
              <Form.Group className="mb-2 " controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                  required
                  minLength={8}
                  placeholder="Téléphone"
                  size="sm"
                  onChange={(e) => setNumber(e.target.value)} 
                  value={number} 
              />
            <Form.Control.Feedback type="invalid"> Numéro de téléphone non valide</Form.Control.Feedback>
           </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
              <Form.Group className="mb-2" controlId="validationCustom01">
              <Form.Control
                type="text"
                required
                size="sm"
                placeholder="Subject"
                autoFocus
                pattern="^[a-zA-Z]{5,}$"
                onChange={(e) => setSubject(e.target.value)} 
                value={subject}
              />
            <Form.Control.Feedback type="invalid"> Le sujet doit contenir au moins 5 caractères et pas de chiffres</Form.Control.Feedback>
           </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Message" required minLength={10}/>
              <Form.Control.Feedback type="invalid"> Message non valide</Form.Control.Feedback>
            </Form.Group>
            <Button variant="danger" type='submit'>ENVOYER</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
