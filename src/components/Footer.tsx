import { Container, Form, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container fluid >
      <Row  >
        <Col xs={12} md={4} className="text-white order-first my-2 " style={{ backgroundColor: '#0c2461' }}>
          <p className="fw-bold fs-2">NOUS ECRIRE</p>
          <hr style={{ width: 50, fontSize:15 }} />
          <p className="fs-5">Envoyez-nous vos demandes</p>
        </Col>
        <Col xs={12} md={8} className="bg-light my-2 ">
          <Form>
            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Nom" size="sm" />
                </Form.Group>
              </Col>

              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Email" size="sm" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Téléphone" size="sm" />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Sujet" size="sm" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
