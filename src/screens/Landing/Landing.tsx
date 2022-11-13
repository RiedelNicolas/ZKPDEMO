import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useLocation } from "wouter";
import "./style.scss"

export const Landing = () => {
  const [location, setLocation] = useLocation();
  const goSelectGame = () => {
    setLocation("/ZKPDEMO/SelectGame");
  }
  return (
    <Container id='LandingContainer'>
      <Row className='d-flex justify-content-center'>
        <Col md="8" xs="10">
          <Card>
            <Card.Header>
              <Card.Title>Ejemplo práctico de ZKP</Card.Title>
            </Card.Header>
            <Card.Body>

              <Card.Text>
                Este es un ejemplo práctico de ZKP, en el cual se ejemplifica que un usuario puede demostrar a una entidad que dos imágenes son diferenciables sin dar información acerca de las mismas.
              </Card.Text>
              
              <Card.Text>
              Fue desarrollado como complemento al trabajo práctico de la materia Criptografía y Seguridad Informática, Facultad de Ingeniería, Universidad de Buenos Aires.
              </Card.Text>
              <Row className='d-flex justify-content-center'>
                <Col xs="auto">
                  <Button variant="primary" onClick={goSelectGame}>Empezar</Button>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <Card.Text>
                Grupo compuesto por : Agustín Cambiano, Iván Soriano, Ezequiel Zbogar, Marcos Daniel Rolando y Nicolás Agustín Riedel.
              </Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}